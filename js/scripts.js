$(document).ready(function() {
	// NEW YORK
  $.simpleWeather({
    woeid: '2459115',
    unit: 'f',
    success: function(weather) {
      html = '<h4 class="pushdown">'+weather.city+'</h4>';
		html += '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });
  // SEATTLE
  $.simpleWeather({
    woeid: '2490383',
    unit: 'f',
    success: function(weather) {
      html = '<h4>'+weather.city+'</h4>';
		html += '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather3").html(html);
    },
    error: function(error) {
      $("#weather3").html('<p>'+error+'</p>');
    }
  });
  // LONDON
  $.simpleWeather({
	woeid: '44418',
    unit: 'f',
    success: function(weather) {
		html = '<h4>'+weather.city+' '+weather.region+'</h4>';
		html += '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather4").html(html);
    },
    error: function(error) {
      $("#weather4").html('<p>'+error+'</p>');
    }
  });
  // CAIRO
  $.simpleWeather({
	woeid: '1521894',
    unit: 'f',
    success: function(weather) {
		html = '<h4>'+weather.city+' '+weather.region+'</h4>';
		html += '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather5").html(html);
    },
    error: function(error) {
      $("#weather5").html('<p>'+error+'</p>');
    }
  });
  // TOKYO
  $.simpleWeather({
	woeid: '1118370',
    unit: 'f',
    success: function(weather) {
		html = '<h4>'+weather.city+' '+weather.region+'</h4>';
		html += '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather6").html(html);
    },
    error: function(error) {
      $("#weather6").html('<p>'+error+'</p>');
    }
  });
  
  
});
   //****************************
$('button').click(function(){
	
	
if (isNaN( $('input').val() )) {
    // It isn't a number
	alert('You can only use numbers.');
		/*$(this).effect("highlight", {}, 3000);
		log.console("highlight");*/
	
} else {
    // It is a number
	$("#weather").animate({

     	height: "430px",
	

    }, 
    { duration: 1000,
      complete: function() {
        // update the content here
		
		zip = $('input').val();
		
		$.simpleWeather({
			zipcode: zip,
			unit: 'f',
			success: function(weather) {
				
				html = '<h5 class="offset1">'+weather.city+', '+weather.region+'</h5>';
				html += '<img src="img/icons/'+weather.tomorrow.code+'.png" class="weatherimage hikeup">';
				html += '<h2 class=" span2">'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
				html += '<h4 class="temphigh span2 ">'+weather.high+'&deg; high</h4>';
				html += '<h4 class="templow span2 ">'+weather.low+'&deg; low</h4>';
				html += '<p class="span2 bdrbot">Conditions: '+weather.currently+'</p>';
				html += '<p class="span2 bdrbot">Feels like: '+weather.wind.chill+'&deg;'+weather.units.temp+'</p>';
				html += '<p class="span2 bdrbot">Visibility: '+weather.visibility+' '+weather.units.distance+'.</p>';
				html += '<p class="span2 bdrbot">Sunrise '+weather.sunrise+'</p>';
				html += '<p class="span2 bdrbot">Sunset '+weather.sunset+'</p>';
	
				
				$("#weather").html(html);
				$('#weather').addClass('bg' + weather.code );
			},
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
				$("#weather").animate('clearQueue');
			}
		});
		
		
       
      }
    }
  );
  //********
}	
$.simpleWeather({
			zipcode: '99004',
			
			unit: 'c',
			success: function(weather) {
				
					//get weather data	
				
				
				html = '<img style="float:left;" width="150px" src="img/weather/'+weather.code+'.png">';
				html += '<h1>' + weather.temp +'&deg; '+ weather.units.temp + ' ' +'<span>' + weather.currently +'</span>' + '</h1>';
					
					//put weather data in container 
				$(".cheney").html(html);
			},
			
				//can't connect to Yahoo
			error: function(error) {
				$(".cheney").html("<p>"+error+"</p>");
			}
	
			});
	

	

		
});




