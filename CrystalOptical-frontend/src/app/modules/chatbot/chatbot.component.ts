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
      ["how are you", "how is life", "how are things"], //0
      ["hi", "hey", "hello", "good morning", "good afternoon"], //1
      ["what are you doing", "what is going on", "what is up"], //2
      ["how old are you"], //3
      ["who are you", "are you human", "are you bot", "are you human or bot"], //4
      // Add more utterances here as needed
    ];

    const answers = [
      ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"], //0
      ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"], //1
      ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"], //2
      ["I am infinite"], //3
      ["I am just a bot", "I am a bot. What are you?"], //4
      // Add more responses here as needed
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
          if (utterancesArray[x][y] === string) {
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
      <div class="chatbox-message-item sent" style=" align-self: flex-end; background: blue; color: white; border-radius: .75rem 0 .75rem .75rem; padding-left: 90%">
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
      let bot = `<div class="chatbox-message-item received" style=" align-self: flex-start; background: antiquewhite; border-radius: 0 .75rem .75rem .75rem; padding-right: 90%">
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
