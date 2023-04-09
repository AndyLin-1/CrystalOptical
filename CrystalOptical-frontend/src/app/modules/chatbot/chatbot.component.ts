import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // MESSAGE INPUT
    const textarea = document.querySelector('.chatbox-message-input') as HTMLTextAreaElement;
    const chatboxForm = document.querySelector('.chatbox-message-form') as HTMLFormElement;

    textarea.addEventListener('input', function () {
      let line = textarea.value.split('\n').length;

      if(textarea.rows < 6 || line < 6) {
        textarea.rows = line;
      }

      if(textarea.rows > 1) {
        chatboxForm.style.alignItems = 'flex-end';
      } else {
        chatboxForm.style.alignItems = 'center';
      }
    });


    // TOGGLE CHATBOX
    const chatboxToggle = document.querySelector('.chatbox-toggle') as HTMLElement;
    const chatboxMessage = document.querySelector('.chatbox-message-wrapper') as HTMLElement;

    chatboxToggle.addEventListener('click', function () {
      chatboxMessage.classList.toggle('show');
    });

    // DROPDOWN TOGGLE
    const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle') as HTMLElement;
    const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu') as HTMLElement;

    dropdownToggle.addEventListener('click', function () {
      dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
      if (e.target && !(e.target as HTMLElement).matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
        dropdownMenu.classList.remove('show');
      }
    });

    // Reset the chat when the "Reset" button is clicked
    const resetButton = document.querySelector('.chatbox-reset') as HTMLElement;
    resetButton.addEventListener('click', () => {
      const chatboxMessageWrapper = document.querySelector('.chatbox-message-content') as HTMLElement;
      const chatboxNoMessage = document.querySelector('.chatbox-message-no-message') as HTMLElement;

      // Clear the chat message content
      chatboxMessageWrapper.innerHTML = '';

      // Hide any messages
      chatboxNoMessage.style.display = 'block';
    });

    // CHATBOX MESSAGE
    const chatboxMessageWrapper = document.querySelector('.chatbox-message-content') as HTMLElement;
    const chatboxNoMessage = document.querySelector('.chatbox-message-no-message') as HTMLElement;


    chatboxForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if(isValid(textarea.value)) {
        writeMessage();
        setTimeout(autoReply, 1000)
      }
    });

    function addZero(num: number): string {
      return num < 10 ? '0'+num : num.toString();
    }

    const utterances = [
      ["types of glasses", "Types of Glasses", "Types Of glasses", "Types Of Glasses",
        "types Of Glasses", "types Of glasses"], //0

      ["types of frames", "Types of Frames", "Types Of frames", "Types Of Frames",
        "types Of Frames", "types Of frames"], //1

      ["types of lenses", "Types of Lenses", "Types Of lenses", "Types Of Lenses",
        "types Of Lenses", "types Of lenses"],  //2

      ["Types of Lens Coatings", "Types of lens coatings", "Types of lens Coatings",
        "types of Lens Coatings", "types of lens coatings", "Types Of Lens Coatings",
        "Types Of lens coatings", "Types Of Lens coatings", "Types Of Lens Coatings",
        "Types of Lens coatings", "types Of Lens coatings", "types Of lens coatings",
        "types Of Lens Coatings", "types of lens Coatings"], //3

      ["try on", "tryon", "try out", "tryout", "test out", "testout", "demo", "demonstrate",
        "sample", "put on", "wear", "try", "preview", "model", "experience",
        "see how it looks", "see how it fits", "see how they look",
        "see how they fit", "see how it suits", "see how they suit",
        "see how they feel", "try it on", "try them on", "try these on",
        "try this on", "test it out", "test them out", "test these out",
        "test this out", "demo it", "demo them", "demo these", "demo this",
        "demonstrate it", "demonstrate them", "demonstrate these",
        "demonstrate this", "sample it", "sample them", "sample these",
        "sample this", "check it out", "check them out", "check these out",
        "check this out", "put it on", "put them on", "put these on",
        "put this on", "wear it", "wear them", "wear these", "wear this",
        "try it", "try them", "try these", "try this", "preview it",
        "preview them", "preview these", "preview this", "model it",
        "model them", "model these", "model this", "experience it",
        "experience them", "experience these", "experience this",
        "see how it looks on me", "see how it fits me",
        "see how they look on me", "see how they fit me",
        "see how it suits me", "see how they suit me",
        "see how they feel on me", "try it on for size",
        "try them on for size", "try these on for size", "try this on for size"], //4

      ["shipping options", "Shipping Options",
        "Shipping options", "shipping Options", "SHIPping options", "ShIPping Options",
        "SHIPping", "ShIPping", "shipPING", "ShIp", "ShIP"], //5

      ["shipping cost",  "Shipping Cost",  "shipping costs",  "Shipping Costs",
        "shipping fee",  "Shipping Fee", "shipping fees",
        "Shipping Fees",  "cost of shipping",  "Cost of Shipping",
        "shipping price",  "Shipping Price",  "shipping prices",  "Shipping Prices"], //6

      ["shipping time",  "Shipping Time",  "Shipping time",  "shipping times",
        "Shipping Times",  "Shipping times",  "delivery time",  "Delivery Time",
        "Delivery time",  "delivery times",  "Delivery Times",  "Delivery times",
        "estimated shipping time",  "Estimated Shipping Time",  "Estimated shipping time",
        "estimated delivery time",  "Estimated Delivery Time",  "Estimated delivery time",
        "shipping time frame",  "Shipping Time Frame",  "Shipping time frame",
        "shipping duration",  "Shipping Duration",  "Shipping duration",
        "delivery duration",  "Delivery Duration",  "Delivery duration"], //7

      [  "payment", "payment methods",  "Payment Methods",  "Payment methods",  "payment Methods",
        "accepted payment methods",  "Accepted Payment Methods",  "Accepted payment methods",
        "accepted Payment Methods",  "available payment methods",  "Available Payment Methods",
        "Available payment methods",  "available Payment Methods"], //8

      ["check my order status", "Check My Order Status",
        "Check my order status", "Check Order Status", "check order status",
        "Order status check", "Order Status Check"], //9

      ["return my glasses",  "return glasses",  "glasses return",
        "returning glasses",  "return eyewear",  "eyewear return",  "return my eyewear",], //10

      ["warranty policy",  "warranty",  "product warranty"], //11

      [ "cancel my order",  "cancellation of order",  "cancel order",  "cancelling an order",
        "order cancellation",  "can I cancel my order",  "how to cancel an order",
        "how do I cancel my order",  "cancelling my order",  "order cancel",
        "order cancelation",  "cancel my purchase",  "cancel my purchase order",
        "can I cancel my purchase",  "how to cancel my purchase",
        "how do I cancel my purchase",  "cancelling my purchase",
        "purchase cancellation",  "can I cancel my purchase order"], //12

      [  "Thank you for your assistance",  "Thank you for your help",  "Thanks for your assistance",
        "Thanks for your help",  "Thank you so much for your assistance",
        "Thank you so much for your help",  "Thanks so much for your assistance",
        "Thanks so much for your help",  "Thank you very much for your assistance",
        "Thank you very much for your help",  "Thanks a lot for your assistance",
        "Thanks a lot for your help", "thanks for your help"], //13

      ["Hello", "Hi", "hello", "hi", "HELLO", "HI", "Hey", "hey"], //14
    ];

    const answers = [
      ["We currently only offer non-prescription glasses."], //0
      ["We have frames in various colors, and sizes (XS, M, L, XL)."], //1
      ["We offer standard non-prescription lenses for all our glasses."], //2
      ["All of our glasses are anti-glare, scratch-resistant, and blue light coatings, with no extra cost."], //3
      ["We have a virtual try-on feature on our website that allows you to upload a photo of yourself and see how different glasses styles look on your face."], //4
      ["We currently only offer shipping to any location within Canada."], //5
      ["Shipping is free to any place located in Canada, do not offer shipping anywhere else."], //6
      ["We offer free shipping to any location within Canada, and it takes 5-7 business days to arrive."], //7
      ["We currently only accept credit card payments, such as VISA and MasterCard"], //8
      ["You can check your order status by logging into your account or by contacting customer service."], //9
      ["We offer a 30-day return policy, and you can return your glasses for a full refund."], //10
      ["We offer a 1-year warranty on all our glasses."], //11
      ["You can cancel your order within 24 hours of placing it by contacting our customer service team.\n" +
      "If your order has already shipped, you'll need to wait until you receive it and then initiate a return or exchange if necessary."], //12
      ["You're welcome!"], //13
      [
        "Hello! How can I assist you today?",
        "Hi there! What can I help you with?",
        "Hey! What brings you to our site?",
        "Hi! Welcome to our online store. How may I assist you?",
        "Hello there! How can I help you with your shopping today?",
        "Hey there! Looking for anything specific?",
        "Hi! Thanks for reaching out. How may I assist you?",
        "Greetings! What can I help you find today?",
        "Hi, how can I assist you with your shopping today?",
        "Hello! What brings you to our online store today?",
        "Hey! Looking for any specific product or information?",
        "Hi there! How can I make your shopping experience better today?",
        "Hello! Welcome to our online store. How may I help you today?",
        "Hi, I'm here to help. What can I do for you today?",
        "Hey there! Is there anything I can assist you with today?",
      ], //14
    ];

    const alternatives = ["I'm sorry I do not have that information right now, please contact customer support for more details."];

    function output(input: string): string {
      let product;
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
      text = text
        .replace(/ a /g, " ")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
      if (compare(utterances, answers, text)) {
        product = compare(utterances, answers, text);
      }
      else {
        product = alternatives[Math.floor(Math.random() * alternatives.length)];
      }
      //update  DOM
      // @ts-ignore
      //addChatEntry(input, product);
      return product;
    }

    function compare(
      utterancesArray: string[][],
      answersArray: string[][],
      string: string
    ): string | undefined {
      let item: string | undefined;
      for (let x = 0; x < utterancesArray.length; x++) {
        for (let y = 0; y < utterancesArray[x].length; y++) {
          if (string.includes(utterancesArray[x][y])) {
            const items = answersArray[x];
            item = items[Math.floor(Math.random() * items.length)];
            return item;
          }
        }
      }
      return item;
    }


    function writeMessage() {
      const today = new Date();
      let text = textarea.value.trim().replace(/[^\w\s\d]/gi, "");
      let person = `
      <div class="chatbox-message-item sent" style=" align-self: flex-end; background: blue; color: white; border-radius: .75rem 0 .75rem .25rem;">
        <div class="chatbox-message-item-text">
          ${text}
        </div>
        <div class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</div>
      </div>
    `;
      chatboxMessageWrapper.insertAdjacentHTML('beforeend', person);
      chatboxForm.style.alignItems = 'center';
      textarea.rows = 1;
      textarea.focus();
      textarea.value = '';
      chatboxNoMessage.style.display = 'none';
      scrollBottom();
      autoReply(text);
    }

    function autoReply(input: string) {
      const today = new Date();
      let text = output(input);
      let bot = `<div class="chatbox-message-item received" style=" align-self: flex-start; background: antiquewhite; border-radius: 0 .75rem .75rem .25rem;">
        <div class="chatbox-message-item-text">
          ${text}
        </div>
        <div class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</div>
      </div>`;
      chatboxMessageWrapper.insertAdjacentHTML('beforeend', bot);
      scrollBottom();
    }

    function scrollBottom() {
      chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
    }

    function isValid(value: string): boolean {
      let text = value.replace(/\n/g, '');
      text = text.replace(/\s/g, '');

      return text.length > 0;
    }
  }

}
