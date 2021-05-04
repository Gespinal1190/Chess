const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const signupEmail = Document.querySelector('signup-email').value;
    const signupEmail = Document.querySelector('signup-Password').value;

    console.log(signupEmail, signupEmail)

    auth
     .createuserWhtethEmailAndpassword(email, password)

     
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
})