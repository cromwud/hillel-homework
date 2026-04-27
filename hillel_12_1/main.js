'use strict';

let savedUrl = '';

const btnEnter = document.getElementById('btnEnterUrl');
const btnGo = document.getElementById('btnRedirect');

btnEnter.addEventListener('click', () => {
    const input = prompt('Будь ласка, введіть адресу сайту (наприклад, https://google.com):');
    
    if (input) {
    
        if (!input.startsWith('http://') && !input.startsWith('https://')) {
            savedUrl = 'https://' + input;
        } else {
            savedUrl = input;
        }
        console.log(`Посилання збережено: ${savedUrl}`);
    }
});


btnGo.addEventListener('click', () => {
    if (savedUrl) {
       
        window.location.href = savedUrl;
    } else {
        alert('Спочатку потрібно ввести посилання!');
    }
});