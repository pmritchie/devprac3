document.querySelector("title").innerHTML = "Camping Sites";

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

		var xhr = new XMLHttpRequest();
		xhr.onload = function(){

			var data = JSON.parse(xhr.responseText);
			document.querySelectorAll('td')[0].innerHTML = data.name;
			document.querySelectorAll('td')[1].innerHTML = Math.round(data.main.temp*.18+32)+" F";
			document.querySelectorAll('td')[2].innerHTML = data.weather[0].main;


		}


		xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Key Largo,us&APPID=f23ce7330ba3f39eaafdde4c3e827470', true);
		xhr.send(null)
///////////////////////////////////////////////////////////
				var xhr2 = new XMLHttpRequest();
				xhr2.onload = function(){

					var data2 = JSON.parse(xhr2.responseText);
					document.querySelectorAll('td')[3].innerHTML = data2.name;
					document.querySelectorAll('td')[4].innerHTML = Math.round(data2.main.temp*.18+32)+" F";
					document.querySelectorAll('td')[5].innerHTML = data2.weather[0].main;
				}


				xhr2.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Cedar Creek,us&APPID=f23ce7330ba3f39eaafdde4c3e827470', true);
				xhr2.send(null)
/////////////////////////////////////////////////////////
		var xhr3 = new XMLHttpRequest();
		xhr3.onload = function(){

			var data3 = JSON.parse(xhr3.responseText);
			document.querySelectorAll('td')[6].innerHTML = data3.name;
			document.querySelectorAll('td')[7].innerHTML = Math.round(data3.main.temp*.18+32)+" F";
			document.querySelectorAll('td')[8].innerHTML = data3.weather[0].main;
		}


xhr3.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Chattahoochee,us&APPID=f23ce7330ba3f39eaafdde4c3e827470', true);
xhr3.send(null)
}

// close when user clicks the x button
span.onclick = function() {
    modal.style.display = "none";
}
// closes window when user clicks outside of modal
window.onclick = function(event){
	if(event.target == modal) {
		modal.style.display = "none";
	}
}











