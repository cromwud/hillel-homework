'use strict';
const parent = document.getElementById('buttonParent');
const messageDisplay = document.getElementById('message');

parent.addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        
        const buttonText = target.textContent;
        const buttonId = target.getAttribute('data-id');

        messageDisplay.textContent = `Ви натиснули: ${buttonText} (ID: ${buttonId})`;
        
        console.log(`Клікнуто по кнопці: ${buttonText}`);
    }
});