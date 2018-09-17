var form = document.querySelector('#form');
//change form contact name
var contactForm = document.querySelector('#form h2');
contactForm.innerHTML = "Contact Me";

//change paragraph in form
var formParagraph = document.querySelectorAll('#form p')
formParagraph[0].innerHTML = "Lets go camping! Enter your information to get maps, updates on events, camp store hours and much more for your camping trip! "
//changes background image
//document.body.style.backgroundImage = "url('https://unsplash.com/photos/5bdZrP-sTS4')";

//change label names
var label = form.querySelector('[placeholder=Name]');
label.placeholder = "Full Name";
var people = document.getElementById('phone');
people.placeholder = "Enter Number of Campers";
//labels.innerHTML = "Full Name";
//disable button
var button = document.body.querySelector('#form button');
button.disabled=true;



 function validateForm(event){
 	//event.preventDefault();

 var form = document.querySelector('#form');
 var fields = form.querySelectorAll('.required');
 var valid = true;

 for(var i =0; i < fields.length; i++){
 	if(!fields[i].value){
 		valid = false;}
 }
 // Open Submit
 if(valid == true){
 	var button = document.querySelector('#form button');
	button.disabled=false;
	console.log('Why??');
 } //else{console.log("not working")}
}

//check for validations
function validateRequired(event){
	event.preventDefault();
	var target = event.target;
	var parent = target.parentElement; 
	var error ='<label class="error">This field is required!</label>';

if(!target.value.length){
	if(!parent.querySelector('.error')){
		parent.insertAdjacentHTML('beforeend', error);
	}
	}else{
		parent.removeChild(parent.querySelector('.error'));
		console.log("its is removing .error");
	}
}
//check if submissions are allowed
var requireFields = form.querySelectorAll('.required');
for(var i = 0; i < requireFields.length; i++){
	requireFields[i].addEventListener('input', validateForm);
	requireFields[i].addEventListener('blur', validateRequired);
}

function send(event){
	//event.preventDefault();//stop submission

	var form = document.querySelector('#form');
	var message = '<h2>Thank You</h2><p>Happy camping and do not forget the smores!</p>';

	var target = event.target;
	var disable = target.classList.contains('disabled');
	button.disabled=false;
	form.innerHTML = message;
	// if(button.disabled == true){
	// 	form.innerHTML = messsage;
	// }
}

var submit = form.querySelector('[type=submit]');
submit.addEventListener('click', send);


































