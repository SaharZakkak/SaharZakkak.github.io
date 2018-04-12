

	$(document).ready(function() {
	
		$("#arrow-top").hide();
		$("#arrow-top").fadeIn();
		
		$("#arrow-top").click(function(){
			$("body").animate({
				scrollTop: 0
			}, 1000);		
		});
		
	});


	$(document).ready(function(){
		$("#HamIcon").click(function(){
			$("nav").toggle("fast");
			//$("nav").slideDown("slow");
			
		});
	});

 
  $(document).ready(function(){
  
       $(".imgDescription").mouseover(function(){
			$cityName = $(this).find(".city").text();
			$temperatureElement = $(this).find(".temperature");				  
			$temperatureElement.text("");
			$.ajax({
				url:"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+$cityName+"%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
				success: function(getData){
				console.debug("temperature is: " + getData.query.results.channel.item.condition.temp);
					$temperatureElement.text(getData.query.results.channel.item.condition.temp);
				}
				  
			});
	    });		
	});

