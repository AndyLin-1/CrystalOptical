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
        setTimeout(autoReply, 1000);
      }
    });

    function addZero(num: number): string {
      return num < 10 ? '0'+num : num.toString();
    }

    function writeMessage() {
      const today = new Date();
      let message = `
          <div class="chatbox-message-item sent" style=" align-self: flex-end; background: blue; color: white; border-radius: .75rem 0 .75rem .75rem; padding-left: 90%">
            <div class="chatbox-message-item-text">
              ${textarea.value.trim().replace(/\n/g, '<br>\n')}
            </div>
            <div class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</div>
          </div>
        `;
      chatboxMessageWrapper.insertAdjacentHTML('beforeend', message);
      chatboxForm.style.alignItems = 'center';
      textarea.rows = 1;
      textarea.focus();
      textarea.value = '';
      chatboxNoMessage.style.display = 'none';
      scrollBottom();
    }

    function autoReply() {
      const today = new Date();
      let message = `
        <div class="chatbox-message-item received" style="background: antiquewhite; border-radius: 0 .75rem .75rem .75rem; box-shadow: .25rem .25rem 1.5rem rgba(0, 0, 0, .05);">
          <div class="chatbox-message-item-text">
            Thank you for your awesome support!
          </div>
          <div class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</div>
        </div>
      `;
      chatboxMessageWrapper.insertAdjacentHTML('beforeend', message);
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
