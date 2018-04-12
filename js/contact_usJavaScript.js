
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
		$("button").click(function(){
			$("#response").load("demo_test.txt",

			function(responseTxt, statusTxt, xhr){
			
				if(statusTxt == "success"){
				     alert("THANK YOU, WE WILL CONTACT YOU BACK SOON, HAVE A NICE DAY :D" );
					//alert("External content loaded successfully!");
				
				}
					
				if(statusTxt == "error"){					
				   alert("AN ERROR OCCURED, PLEASE TRY AGAIN!" );
				 // alert("Error: " + xhr.status + ": " + xhr.statusText);
				}
					
			});
		});
	});

