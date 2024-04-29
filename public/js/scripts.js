// frontend/js/scripts.js

// Function to handle form submission for registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Send data to backend for registration
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful!');
        } else {
            alert('Registration failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});

// Function to handle form submission for login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Send data to backend for login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            // Redirect to dashboard or homepage
            window.location.href = '/dashboard';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
