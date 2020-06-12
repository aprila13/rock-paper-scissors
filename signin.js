//Grab sign in button
signIn = document.getElementById('sign-in');

//Add event listener to button
signIn.addEventListener('click', checkEmail);

//function to validate email and name
function checkEmail(e) {

  fname = document.getElementById('fname');
  let validMessage = document.getElementById('valid-message');

  let email = document.getElementById('email');
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (fname.value == '') {
    validMessage.innerHTML = 'Please provide a valid first name.';
    validMessage.style.textAlign = 'center';
    validMessage.style.color = 'red';

  } else if (!filter.test(email.value)) {
    validMessage.innerHTML = 'Please provide a valid email address.';
    validMessage.style.textAlign = 'center';
    validMessage.style.color = 'red';
  } else {
    validMessage.style.display = 'none';
    location.replace("game.html")
  }

  e.preventDefault();
}