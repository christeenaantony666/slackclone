const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Here, you would typically make an AJAX request to your server to verify the credentials
  // and then redirect the user to another page if the credentials are valid.
});

