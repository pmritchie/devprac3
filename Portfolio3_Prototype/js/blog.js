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
var btn = document.getElementById('getWeather');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
	 

    	var weather1 = fetch('https://api.openweathermap.org/data/2.5/weather?q=Key Largo,us&APPID=f23ce7330ba3f39eaafdde4c3e827470')
		.then((response)=> response.json()).then((data)=> console.log(data.main));

		// var weather2 = fetch('https://api.openweathermap.org/data/2.5/weather?q=Cedar Creek,us&APPID=f23ce7330ba3f39eaafdde4c3e827470')
		// .then((response)=> response.json()).then((data)=> console.log(data));

		// var weather3 = fetch('https://api.openweathermap.org/data/2.5/weather?q=Chattahoochee,us&APPID=f23ce7330ba3f39eaafdde4c3e827470')
		// .then((response)=> response.json()).then((data)=> console.log(data));

document.getElementsbyTagName("p")[0].innerHTML= data.main


}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal) {
		modal.style.display = "none";
	}
}











