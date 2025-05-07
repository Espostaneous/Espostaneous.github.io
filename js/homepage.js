document.addEventListener('DOMContentLoaded', function () {
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');
  const logoutButton = document.getElementById('logout-button');

  // Toggle the dropdown menu
  userMenuButton.addEventListener('click', function () {
    userMenu.classList.toggle('hidden');
  });

  // Log out functionality
  logoutButton.addEventListener('click', function () {
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
    window.location.href = 'login.html'; // Redirect to the login page
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!userMenuButton.contains(event.target) && !userMenu.contains(event.target)) {
      userMenu.classList.add('hidden');
    }
  });
});