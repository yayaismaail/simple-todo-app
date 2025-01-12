document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const logoutBtn = document.getElementById('logoutBtn');

    loadTasksFromLocalStorage();

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTaskToList(taskText);
            saveTasksToLocalStorage();
        }
    });

    logoutBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    taskList.addEventListener('click', (event) => {
        const { target } = event;
        const li = target.closest('li');
        if (!li) return;

        if (target.classList.contains('complete-btn')) {
            toggleTaskCompletion(li);
        } else if (target.classList.contains('delete-btn')) {
            removeTaskFromList(li);
            saveTasksToLocalStorage();
        }
    });

    function addTaskToList(taskText, isComplete = false) {
        const li = document.createElement('li');
        li.className = 'task-item';
        if (isComplete) li.classList.add('complete');

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function toggleTaskCompletion(taskElement) {
        taskElement.classList.toggle('complete');
        saveTasksToLocalStorage();
    }

    function removeTaskFromList(taskElement) {
        taskList.removeChild(taskElement);
    }

    function saveTasksToLocalStorage() {
        const tasks = [];
        taskList.querySelectorAll('.task-item').forEach((task) => {
            tasks.push({
                text: task.querySelector('.task-text').textContent,
                complete: task.classList.contains('complete'),
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach((task) => addTaskToList(task.text, task.complete));
    }
});
