let firstname = document.querySelector("#fname");
let lastname = document.querySelector("#lname");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let submitBtn = document.querySelector("#submit");
let clearBtn = document.querySelector("#clear");


clearBtn.addEventListener('click', ()=>{
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    message.value = "";
});

var formvalidator  = new Validator("contactform");

formvalidator.addValidation("name","req","Please provide your name");
formvalidator.addValidation("email","req","Please provide your email");
formvalidator.addValidation("email","email","Please enter a valid email address");

