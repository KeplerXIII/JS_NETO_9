const widget = document.querySelector('.chat-widget')
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const time = hours + ':' + (minutes < 10 ? '0' : '') + minutes;
const myArray = ['Досвидания!',
                 'Ты кто? Мы тебя не звали!',
                 'Хорошо, что ты уже уходишь!',
                 'Оператор занят своими делами, ответим, может быть...'];

widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active')
});

input.addEventListener('keydown', function(event) {
    const message = input.value;
    if (event.key === 'Enter' && message) { 
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">
            ${time}
            </div>
            <div class="message__text">
            ${message}
            </div>
        </div>
        `;

        input.value = '';

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">
            ${time}
            </div>
            <div class="message__text">
            ${myArray[Math.floor(Math.random() * myArray.length)]}
            </div>
        </div>
        `;
    }
  });
