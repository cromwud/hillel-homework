const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');


let todos = JSON.parse(localStorage.getItem('todos')) || [];


function render() {
    todosWrapper.innerHTML = ''; 

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.checked ? 'todo-item--checked' : ''}`;
        li.dataset.index = index; 

        li.innerHTML = `
            <input type="checkbox" class="js--todo-check" ${todo.checked ? 'checked' : ''}>
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete js--todo-delete">Видалити</button>
        `;

        todosWrapper.appendChild(li);
    });
}


function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text) {
        todos.push({
            text: text,
            checked: false
        });
        input.value = ''; 
        save();
        render();
    }
});

todosWrapper.addEventListener('click', (e) => {
    const target = e.target;
    const parentLi = target.closest('.todo-item');
    if (!parentLi) return;

    const index = parentLi.dataset.index;

    if (target.classList.contains('js--todo-delete')) {
        todos.splice(index, 1);
        save();
        render();
    }

    
    if (target.classList.contains('js--todo-check')) {
        todos[index].checked = target.checked;
        save();
        render();
    }
});


render();
