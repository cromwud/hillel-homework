const form = document.getElementById('contactForm');

const regexPhone = /^\+380\d{9}$/; 
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nameValue = document.getElementById('userName').value.trim();
    const emailValue = document.getElementById('userEmail').value.trim();
    const phoneValue = document.getElementById('userPhone').value.trim();
    const messageValue = document.getElementById('userMessage').value.trim();

    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('invalid'));

    if (nameValue === '') {
        showError('userName', 'nameError', "Ім'я є обов'язковим");
        isValid = false;
    }

    if (!regexEmail.test(emailValue)) {
        showError('userEmail', 'emailError', 'Введіть коректний email (напр. test@ukr.net)');
        isValid = false;
    }

    if (!regexPhone.test(phoneValue)) {
        showError('userPhone', 'phoneError', 'Номер має починатися з +380 та містити 12 символів');
        isValid = false;
    }

    if (messageValue.length < 5) {
        showError('userMessage', 'messageError', 'Повідомлення має бути не менше 5 символів');
        isValid = false;
    }

    if (isValid) {
        console.log('Дані успішно зібрані:');
        console.log({
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            message: messageValue
        });
        alert('Повідомлення відправлено! Перевірте консоль.');
        form.reset(); 
    }
});

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(errorId);
    
    input.classList.add('invalid');
    errorSpan.textContent = message;
}