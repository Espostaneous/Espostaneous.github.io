document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'user@example.com' && password === 'password123') {
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to the dashboard
  } else {
    alert('Invalid email or password.');
  }
});