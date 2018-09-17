var form = document.querySelector('#form');
//change form contact name
var contactForm = document.querySelector('#form h2');
contactForm.innerHTML = "Contact Me";

//change paragraph in form
var formParagraph = document.querySelectorAll('#form p')
formParagraph[0].innerHTML = "Lets go camping! Enter your information to get updates on events for your camping trip!"
//changes background image
document.body.style.backgroundImage = "url('images/lighthouse.jpg')";

//change label names
var labels = document.querySelectorAll('#form label');
labels[0].innerHTML = "Full Name";

var button = document.body.querySelector('#form button');
button.disabled=true;
//check for validations
function validateForm(event){
	//event.preventDefault();

var form = document.querySelector('#form');
var fields = form.querySelectorAll('required');
var valid = true;

for(var i =0; i< fields.length; i++){
	if(!fields[i].value){valid = false}
}
// Open Submit
if(valid == true){
	var submit = form.querySelector('type=submit');
	submit.removeAttribute('class');
}



}
