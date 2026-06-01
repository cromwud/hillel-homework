$(document).ready(function() {

    const myModal = new bootstrap.Modal(document.getElementById('taskModal'));

    function addTask() {
        const taskValue = $('#task-input').val().trim(); // Берем значение из инпута
        
        if (taskValue === '') {
            alert('Будь ласка, введіть текст завдання!');
            return;
        }
        const newTemplate = `
            <li class="list-group-item d-flex justify-content-between align-items-center todo-item">
                <span class="task-text">${taskValue}</span>
                <button class="btn btn-danger btn-sm delete-btn">Видалити</button>
            </li>
        `;
   
        $('#todo-list').append(newTemplate);

      
        $('#task-input').val('');
    }

  
    $('#add-btn').on('click', addTask);


    $('#task-input').on('keypress', function(e) {
        if (e.which === 13) {
            addTask();
        }
    });

    $('#todo-list').on('click', '.delete-btn', function(e) {
        $(this).closest('li').remove();
    });
  
    $('#todo-list').on('click', '.task-text', function() {
        const taskText = $(this).text().trim();
        $('#modal-task-text').text(taskText);
        myModal.show();
    });
  
    $('#todo-list').on('dblclick', '.task-text', function() {
       
        $(this).toggleClass('completed');
    });

});