document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const logoutBtn = document.getElementById('logoutBtn');

    addTaskBtn.addEventListener('click', addTask);
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.classList.add('task-text');
            span.textContent = taskText;

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.addEventListener('click', () => {
                span.classList.toggle('complete');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(span);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const taskInput = document.getElementById('taskInput');
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const taskList = document.getElementById('taskList');

//     addTaskBtn.addEventListener('click', addTask);

//     function addTask() {
//         const taskText = taskInput.value.trim();
//         if (taskText !== '') {
//             const li = document.createElement('li');
//             li.textContent = taskText;

//             const completeBtn = document.createElement('button');
//             completeBtn.textContent = 'Complete';
//             completeBtn.addEventListener('click', () => {
//                 li.classList.toggle('complete');
//             });

//             const deleteBtn = document.createElement('button');
//             deleteBtn.textContent = 'Delete';
//             deleteBtn.addEventListener('click', () => {
//                 taskList.removeChild(li);
//             });

//             li.appendChild(completeBtn);
//             li.appendChild(deleteBtn);

//             taskList.appendChild(li);
//             taskInput.value = '';
//         }
//     }
// });
