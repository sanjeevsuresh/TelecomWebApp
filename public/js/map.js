$(function() {
	//map options
	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(17.6883, 83.2186),
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_LEFT
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		scaleControl: false

	};

	//Adding infowindow option
	infowindow = new google.maps.InfoWindow({
	content: "holding..."
	});

	//Fire up Google maps and place inside the map-canvas div
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var accessUrl = "http://localhost:3000/api/disasters?callback=?";
	var accessUrl2 = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=93030";
	// var marketId = []; //returned from the API
	// var marketName = []; //returned from the API
	$('.updateButton').click(function() {
		console.log("hiyo");
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: accessUrl,
			dataType: 'jsonp',
			success: function (data) {
				console.log(data.results);
				console.log(data);
				// $.each(data.results, function (i, val) {
				// 	marketId.push(val.id);
				// 	marketName.push(val.marketname);
				//  });
					
				// console.log(marketName);
			}
		});
		console.log("hiyo2");
	});
});