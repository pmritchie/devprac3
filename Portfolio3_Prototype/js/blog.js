document.querySelector("#blog h2").innerHTML = " ";

var xhr = new XMLHttpRequest();
xhr.onload = function(){

	var data = JSON.parse(xhr.responseText);

	var locationSection = document.querySelector('#blog');
	if(locationSection){
		var locations ='';
		for(var i = 0; i<data.locations.length; i++){
			locations += '<article>';
			locations += '<p class="thumbnail"><img src="'+ data.locations[i].image +'"alt="' + data.locations[i].location + '"></p> ';
			locations += '<h3>' + data.locations[i].location + '</h3>';
			locations += '<h4 class="location">' + data.locations[i].city + ', ' + data.locations[i].state + '</h4><br>';
			locations += '<p>' + data.locations[i].description + '</p>';

			
			locations += '<dl>';
			locations += '<dt> Rating</dt>';
			locations += '<dd>' + data.locations[i].rating + ' stars</dd>';

			locations += '<dt> Rates</dt>';
			locations += '<dd>' + data.locations[i].rates + '</dd>';

			locations += '<dt> RV Camping</dt>';
			locations += '<dd>' + data.locations[i].RV_Camping + '</dd>'

			locations += '</dl>'
			locations += '</article>';
		}
		locationSection.querySelector('h2').insertAdjacentHTML('afterend', locations);
	}
}


xhr.open('GET', 'https://pmritchie.github.io/campingData.json', true);
xhr.send(null)

   

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
function test(){
	console.log("It works");
	var choice = document.querySelectorAll('#blog a');
	if(choice[0]){
		console.log("0");
	}
	else if(choice[1]){
		console.log("1");
	}
	else if(choice[2]){
		console.log("2")
	}

}
function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        	}
	    }
	}
}

// When the user clicks on the button, open the modal 
// function getWeather(event){
// 	fetch('http://www.weather.gov/forecasts/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?zipCodeList=32625&format=24+hourly&startDate=2009-04-21&numDays=7')

// }
// var click = document.querySelector('#myBtn');
// click.addEventListener('click', getWeather);
// document.getElementById('selectionOne').addEventListener('click', getWeather);
