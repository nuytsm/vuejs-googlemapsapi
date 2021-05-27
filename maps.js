let map;
let geocoder;

var locations = [];

var app = new Vue({
  el: '#app',
  data: {
    locationnames: [],
	locationname: ""
  },
	methods: {
		addlocation: function() {
				console.log('addloc')
			this.locationnames.push(this.locationname)
				geocodeAddress(geocoder, map, this.locationname)
			this.locationname = "";
//			for (let loc of this.locationnames){
//			}
		},
		addloc: function(evt){
			if(event.key === 'Enter') {
			      this.addlocation()      
			    }
		}	
	}
})



function initMap() {
	geocoder = new google.maps.Geocoder();
  const school = { lat: 51.218401, lng: 5.307320 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: school,
    zoom: 2,
  });
  new google.maps.Marker({
    position: school,
    map,
    title: "School!",
  });
  
	
	
//	geocodeAddress(geocoder, map, "Scotland")
//	geocodeAddress(geocoder, map, "Switzerland")
//	geocodeAddress(geocoder, map, "Singapore")
//	geocodeAddress(geocoder, map, "Bangkok")
//	geocodeAddress(geocoder, map, "San Fransisco")
//	geocodeAddress(geocoder, map, "Benin")
//	geocodeAddress(geocoder, map, "Tromsö")
	  
}

function geocodeAddress(geocoder, resultsMap, address) {
	console.log("geocode: " + address)
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
//      resultsMap.setCenter(results[0].geometry.location);
//      new google.maps.Marker({
//        map: resultsMap,
//        position: results[0].geometry.location,
//      });
//		console.log("Hello: ",results[0].geometry.location.lat())
		
		
		var latlng = results[0].geometry.location
		locations.push(latlng);
		const lijn = new google.maps.Polyline({
		    path: locations,
		    geodesic: true,
		    strokeColor: "#FF0000",
		    strokeOpacity: 0.9,
		    strokeWeight: 2,
	  		});
	  lijn.setMap(map);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}


