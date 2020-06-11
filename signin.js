signIn = document.getElementById('sign-in');


signIn.addEventListener('click', checkEmail);

    function checkEmail(e) {
      
      fname = document.getElementById('fname');
      let validMessage = document.getElementById('valid-message');
      
      let email = document.getElementById('email');
      let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
      if (!filter.test(email.value) || fname.value == '') {
      validMessage.innerHTML = 'Please provide a valid first name and email address.';
      validMessage.style.textAlign = 'center';
      validMessage.style.color = 'red';
      // return false;

      
   } else {
     console.log('done');
     validMessage.style.display = 'none';
     location.replace("game.html")
   }

   e.preventDefault();
  }