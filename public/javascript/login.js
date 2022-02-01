var loginButton = document.getElementById('#login')

var signUpButton = document.getElementById('#signup')



async function loginFormHandler() {

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
     if (response.ok) {
       document.location.replace('/post');
     } else {
       document.location.replace('/login');
     }
  }
};

async function signupFormHandler() {

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
       alert(document.location.replace('/login'));
     }

  }
}

$(document).on("submit", '#login', function(event) {
  event.preventDefault();
  loginFormHandler();
});
$(document).on("submit", '#signup', function(event) {
  event.preventDefault();
  console.log('clicked')
  signupFormHandler();
});

