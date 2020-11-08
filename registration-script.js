const form = document.getElementById('form');
const passwrod1El=document.getElementById('password1');
const passwrod2El=document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch=false;

function validateForm(){
    //Using Constraint API
    isValid=form.checkValidity();
    //Style main message for an error
    if(!isValid){
        message.textContent='Please fill out all fields.';
        message.style.color='red';
        messageContainer.style.borderColor='red';
        return;
    }
    //Check to see if password match
    if(passwrod1El.value===passwrod2El.value){
        passwordMatch=true;
        passwrod1El.style.borderColor='green';
        passwrod2El.style.borderColor='green';
        
    }else{
        passwordMatch=false;
        message.textContent="Make sure passwords match."
        message.style.color='red';
        messageContainer.style.borderColor='red';
        passwrod1El.style.borderColor='red';
        passwrod2El.style.borderColor='red';
        return;
    }
    //if form is valid and password match 
    if(isValid && passwordMatch) {
        message.textContent='Successfully Registered!';
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }
} 

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    //Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //validate form
    validateForm();
    //Submite Data if valid
    if(isValid && passwordMatch){
        storeFormData();
    }
}

//Event Listener 
form.addEventListener('submit', processFormData);