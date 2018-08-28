document.querySelector("#blog h2").innerHTML = "Camping";

var xhr = new XMLHttpRequest();
xhr.onload = function(){

	var data = JSON.parse(xhr.responseText);

	var locationSection = document.querySelector('#blog');
	if(locationSection){
		var locations ='';
		for(var i = 0; i<data.locations.length; i++){
			locations += '<article>';
			locatoins += '<p class="thumbnail"><img src="'+ data.locations[i].image +'"alt="'+ data.locations[i].location +' "></p> ';
			locations += '<h3>' + data.locations[i].location + '</h3>';
			location == '<h4 class="location">' + data.locations[i].city + ', '

			locations += '</article>';
		}
		locationSection.querySelector('h2').insertAdjacentHTML('afterend', locations);
	}
}

xhr.open('Get', '', true);
xhr.send(null);