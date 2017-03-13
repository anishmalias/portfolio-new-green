/**	
	* Template Name: MU Material
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. MOBILE MENU
	2. EXPERIENCE SLIDER (Owl Carousel)
	3. EDUCATION SLIDER (Owl Carousel)
	4. PORTFOLIO SLIDER
	5. COUNTER
	6. TESTIMONIAL SLIDER (Owl Carousel)	
	7. MENU SMOOTH SCROLLING
	8. PRELOADER
	9. CALL TO ABOUT
	10. BOTTOM TO UP 
	11. PARALLAX HEADER
	12. HIRE ME SCROLL
	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Mobile MENU
	/* ----------------------------------------------------------- */

    jQuery(".button-collapse").sideNav();
    
	/* ----------------------------------------------------------- */
	/*  2. Experience SLider(Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl = $("#owl-carousel"); 
    owl.owlCarousel({
        items : 4, //4 items above 1024px browser width
        itemsDesktop : [1024,3], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
    });
    // Slide Navigation
    jQuery(".next").click(function(){
        owl.trigger('owl.next');
    });

    jQuery(".prev").click(function(){
        owl.trigger('owl.prev');
    });


    /* ----------------------------------------------------------- */
	/*  3. EDUCATION SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl1 = $("#owl-carousel1"); 
	owl1.owlCarousel({
	    items : 4, //4 items above 1024px browser width
	    itemsDesktop : [1024,3], //3 items between 1024px and 901px
	    itemsDesktopSmall : [900,2], // betweem 900px and 601px
	    itemsTablet: [600,1], //1 items between 600 and 0
	    itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
	});
	// Slide Navigation
	jQuery(".next1").click(function(){
	    owl1.trigger('owl.next');
	});

	jQuery(".prev1").click(function(){
	    owl1.trigger('owl.prev');
	});
	
    /* ----------------------------------------------------------- */
	/*  4. PORTFOLIO SLIDER
	/* ----------------------------------------------------------- */

	jQuery('#portfolio-list').mixItUp();	

	/* ----------------------------------------------------------- */
	/*  5. COUNTER
	/* ----------------------------------------------------------- */

	jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });	  

	/* ----------------------------------------------------------- */
	/*  6. TESTIMONIAL SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl2 = $("#owl-carousel2"); 
    owl2.owlCarousel({
        items : 2, //4 items above 1024px browser width
        itemsDesktop : [1024,2], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
    });

    // Slide Navigation
    jQuery(".next2").click(function(){
        owl2.trigger('owl.next');
    });

    jQuery(".prev2").click(function(){
        owl2.trigger('owl.prev');
    });
	 

	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 
	
	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $(".menu-scroll"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+15;
	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }           
	})
    
	/* ----------------------------------------------------------- */
	/*  8. PRELOADER 
	/* ----------------------------------------------------------- */ 

	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('.progress').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
	  
	/* ----------------------------------------------------------- */
	/* 9. CALL TO ABOUT
	/* ----------------------------------------------------------- */ 
	
	jQuery(".call-to-about").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 10. BOTTOM TO UP
	/* ----------------------------------------------------------- */ 

	jQuery(".up-btn").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 11. PARALLAX HEADER
	/* ----------------------------------------------------------- */ 

	jQuery('.parallax').parallax();

	/* ----------------------------------------------------------- */
	/* 12. HIRE ME SCROLL
	/* ----------------------------------------------------------- */ 

	jQuery(".hire-me-btn").click(function(e) {
		e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: $("#footer").offset().top},
        'slow');
	});

	// Google map

	function initMap() {
		var url = 'img/';
		var myLatLng = {lat: 9.932759, lng: 76.390382};
		
	    var styleArray = [
			{
			  stylers: 
			  [
			  	{ saturation: 0 }
			  ]
			}
		 ]
		

		var map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng, 
			zoom: 13,
			scrollwheel: false,

			styles: styleArray,
		});
		
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: '',
			icon: url + 'img-map-marker.png'
		});
		
	}
	
	initMap();


	// contact form 
    
    
	$('#contact-submit').click(function(){ 
       var valid;	
        valid = validateContactquick();
        if(valid) {

            jQuery.ajax({
                url: "contact-send.php",
                data:$("#contact-form").serialize(),
                type: "POST",
                success:function(data){
                   
                    $("#success-msg .msg-cnt").html(data).parent().fadeIn(250);
                 },
                error:function (){


                }

            });
        }
      return false;
    });
    
   $( document ).ajaxComplete(function() {
        $(".close").on('click',function(e){
            e.preventDefault();
           $(this).parent().parent().fadeOut(250); 
        });
    });   
   

	function validateContactquick() {
          var valid = true;	
          console.log(valid);
         // $(".input-box").parent().addClass("validate");
      	   $(".materialize-textarea").parent().addClass("validate");
          $(".info").parent().removeClass("validate");

          
      	 if(!$("#name").val()) {
              $("#name-info").html("Please enter the name");
      		    $("#name").parent().addClass("validate");
              valid = false;
          }
      	
          if(!$("#email").val()) {
              $("#email-info").html("Please enter the email address");
      		 $("#email").parent().addClass("validate");
              valid = false;
          }
      	
          if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
              $("#email-info").html("Email is invalid");
      		    $("#email").parent().addClass("validate");
              valid = false;
          }
      	
      	 if(!$("#subject").val()) {
              $("#subject-info").html("Please enter a subject");
      		    $("#subject").parent().addClass("validate");
              valid = false;
          }
       
        if(!$("#message").val()) {
              $("#message-info").html("Please enter a message");
      		    $("#message").parent().addClass("validate");
              valid = false;
          }
      		
        return valid;	
      }
     
    $("#contact-form .input-box, #contact-form  .materialize-textarea").keypress(function(){
       validateContactquick();
    });
    
    
});
