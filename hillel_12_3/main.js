'use strict';
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


function addTask() {
    const text = taskInput.value.trim();

    if (text !== '') {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        
        const span = document.createElement('span');
        span.textContent = text; 


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.className = 'delete-btn js--delete';


li.append(span, deleteBtn);

        taskList.appendChild(li);
        taskInput.value = ''; 
        taskInput.focus();    
    }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('js--delete')) {
        const parentLi = event.target.closest('.task-item');
        parentLi.remove();
        
        console.log('Завдання видалено через делегування');
    }
});