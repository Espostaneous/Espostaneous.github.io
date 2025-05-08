// Load user settings from localStorage
function loadSettings() {
  const name = localStorage.getItem('userName') || '';
  const email = localStorage.getItem('userEmail') || '';
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
}

// Save user settings to localStorage
function saveSettings(name, email) {
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
}

// Initialize settings on page load
document.addEventListener('DOMContentLoaded', function() {
  loadSettings();
  document.getElementById('settings-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    saveSettings(name, email);
    alert('Settings updated successfully!');
  });
}); 