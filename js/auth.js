// Centralized authentication and redirection logic

function handleLogin(email, password) {
  if (email === 'user@example.com' && password === 'password123') {
    localStorage.setItem('isAuthenticated', 'true');
    window.location.href = 'homepage.html';
  } else {
    alert('Invalid email or password.');
  }
}

function checkAuth() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (isAuthenticated) {
    window.location.href = 'homepage.html';
  } else {
    window.location.href = 'login.html';
  }
}

// Export functions for use in other scripts
window.handleLogin = handleLogin;
window.checkAuth = checkAuth; 