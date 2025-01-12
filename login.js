document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to tasks page after successful login
    window.location.href = 'tasks.html';
});
