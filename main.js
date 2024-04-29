const emailValue = document.getElementById("email");
const submit = document.getElementById("btn-submit");
const errorIcon = document.getElementById("error-icon");
const errorMessage = document.getElementsByClassName("error-message")[0];

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
submit.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log(emailValue.value);
    if(!validateEmail(emailValue.value)){
        // console.log("Invalid email");
        errorIcon.classList.remove("error");
        errorMessage.classList.remove("error");
    }else {
        // console.log("correct email");
        errorIcon.classList.add("error");
        errorMessage.classList.add("error");
    }
})