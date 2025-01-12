document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to login page after successful registration
    window.location.href = 'login.html';
});
