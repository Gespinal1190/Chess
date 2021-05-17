const signupForm = document.querySelector('#register-form')
const signinForm = document.querySelector('#login-form')

if(signupForm){

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
  
    firebaseProvide.signUp(email.value, password.value, (err, response) => {
      if (err) {
        return console.log("Error register")
      }
  
      localStorage.token = response.user.refreshToken;
      setTimeout(() => {
      location.href = "/profile2"
      }, 1000)
    })
  })

}


if(signinForm){

  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById("your_name");
    const password = document.getElementById("your_pass");
  
    firebaseProvide.singIn(email.value, password.value, (err, response) => {
      if (err) {
        return console.log("Error register")
      }

      localStorage.token = response.user.refreshToken;

      setTimeout(() => {
        location.href = "/profile2"
      }, 1000)
    })
  })
  
}