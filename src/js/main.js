// jQuery
$(window).load(function() { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({'overflow':'visible'});
            });

//$( document ).ready(function() {
//	var $container = jQuery('#masonry-grid');
//	// initialize
//	$container.masonry({
//        itemSelector: '.grid-item',
//        columnWidth: 1
//	});
//});


$(document).ready(function(){
        $('.about').each(function(){              
            var highestBox = 0;
            $('.equal_height .box', this).each(function(){           
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });            
            $('.equal_height .box',this).height(highestBox);  
    });    
});


$(document).ready(function(){
    wow = new WOW(
              {
                animateClass: 'animated',
                offset:       100,
                callback:     function(box) {
                  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
              }
            );
            wow.init();
    
});


jQuery(document).ready(function( $ ) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });
            });

window.onload = function () {
            var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];

        var options = {
            mapTypeControlOptions: {
                mapTypeIds: ['Styled']
            },
            center: new google.maps.LatLng(-7.245217594087794, 112.74455556869509),
            zoom: 16,
            disableDefaultUI: true,	
            mapTypeId: 'Styled'
        };
        var div = document.getElementById('map');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
        }


jQuery(function(){jQuery("img").load(function(){jQuery("#masonry-grid").masonry()}),jQuery("#masonry-grid").masonry({itemSelector:".grid-item",isResizable:"true"})})

 $(document).ready(function() {
                $(".fancybox").fancybox();
            });


$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});




$(document).ready(function() {  
    $("#carousel-example-generic").swiperight(function() {  
        $(this).carousel('prev');  
    }); 
    $("#slider-top").swiperight(function() {  
        $(this).carousel('prev');  
    });
    $("#carousel-example-generic").swipeleft(function() {  
        $(this).carousel('next');  
    });  
    $("#slider-top").swipeleft(function() {  
        $(this).carousel('next');  
    });
});  
