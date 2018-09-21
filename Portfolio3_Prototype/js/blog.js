document.querySelector("#blog h2").innerHTML = "Camping";

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

			locations += '</dl>';
			locations += '<p><a href="#">Weather</a></p>'
			locations += '</article>';
		}
		locationSection.querySelector('h2').insertAdjacentHTML('afterend', locations);
	}
}

xhr.open('GET', 'https://github.com/pmritchie/github.io/blob/master/campingData.json', true);
xhr.send(null);


     
