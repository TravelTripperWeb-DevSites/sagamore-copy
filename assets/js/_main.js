/*
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document)
	.ready(function() {

		// Light Gallery
		$('#lightgallery').lightGallery({
			selector: '.gallery-wrapper .image',
			exThumbImage: 'data-exthumbimage',
			counter: false,
			download: false,
			fullScreen: false
		});
    // Navbar dropdown show on hover
		if (window.innerWidth >= 992) {
			$(".nav-header .dropdown").hover(function() {
				$(this).find(".dropdown-items").slideDown(300);
			}, function() {
				$(this).find(".dropdown-items").slideUp(300);
			});
		} else {
			$(".nav-header .dropdown").click(function() {
				$(this).find(".dropdown-items").slideToggle(300);
			});
		}

		//more blog posts
		if($('.more-blogs-content').length > 0) {
			$('.more-blogs').fadeIn('slow');
		}
    //Tab order for navbar dropdown

    $(document).on("focus", '.nav-header .menu-item > a', function(){
      $('.dropdown-items').hide();
      var parentListItem = $(this).closest("li");
      if(parentListItem.hasClass("dropdown")) {
        $(this).closest(".dropdown").find('.dropdown-items').show();
      }
    });


		// Gallery Filter Function
		$(".gallery-wrapper li a").on("click", function() {

			// Remove active class from everything
			$(".gallery-wrapper li a").each(function() {
				$(this).removeClass('active');
			});

			// Add active class to selected option
			$(this).addClass('active');

			// Assign filter variable
			var $filter = $(this).attr("data-filter");

			// If we select "All," show all
			if ($filter == 'all') {
				$(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn();
			} else {
				$(".fancybox").fadeOut(0).filter(function() {
					// set data-filter value as the data-rel value of selected
					return $(this).data("filter") == $filter;
				}).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
			}

		});


		$('#rd-carousel, #myCarousel')
			.carousel({
				interval: false
			});

		//* Toggle mobile nav menu
		$(".menu-toggle")
			.click(function() {
				$(".nav-header")
					.slideToggle(300);
			});

		$(".room-rate-holder")
			.on("click", function() {
				$(".booking-widget form")
					.submit();
			});

		$('#homeCarousel,#specialsCarousel,#events-carousel')
			.carousel({
				interval: 7000,
				cycle: true,
				nav: true
			});

		$(document).on('click', '.view-video', function() {
			var videoUrl = $(this).attr('data-src'),
				videoSRCauto = videoUrl + "?autoplay=1";
			$('#eventVideo iframe').attr('src', videoSRCauto);
			$('#eventVideo').modal('show');
		});

		$('#eventVideo').on('hidden.bs.modal', function() {
			$('#eventVideo iframe').attr('src', '');
		});

		// move caption area out of carousel for rooms
		setTimeout(function() {
			$('#rooms-carousel, #offers-carousel ')
				.carousel({
					interval: 5000,
					cycle: true,
					nav: true
				});
			$(' #roomscroll, #offerscroll')
				.carousel({
					interval: false,
					cycle: true,
					nav: true
				});

			$('#rooms-carousel, #offers-carousel ')
				.on('slide.bs.carousel', function(ev) {
					var direction = ev.direction == 'right' ? 'prev' : 'next';
					$('#roomscroll, #offerscroll')
						.carousel(direction);
				});

		}, 2000);

		setTimeout(function() {
			$('#offers-carousel ')
				.carousel({
					interval: 5000,
					cycle: true,
					nav: true
				});
			$(' #offerscroll')
				.carousel({
					interval: false,
					cycle: true,
					nav: true
				});

			$('#offers-carousel ')
				.on('slide.bs.carousel', function(ev) {
					var direction = ev.direction == 'right' ? 'prev' : 'next';
					$('#offerscroll')
						.carousel(direction);
				});

		}, 2000);

		// move caption area out of carousel for specials
		$('#specials-carousel')
			.carousel();
		var caption = $('#specials-carousel')
			.find('div.item:nth-child(1) .carousel-caption h3');
		$('.special-caption-area h3')
			.html(caption.html());
		caption.css('display', 'none');

		var captionp = $('#specials-carousel')
			.find('div.item:nth-child(1) .carousel-caption p');
		$('.special-caption-area p')
			.html(captionp.html());
		captionp.css('display', 'none');

		var captionlinks = $('#specials-carousel')
			.find('div.item:nth-child(1) .carousel-caption .links');
		$('.special-caption-area .links')
			.html(captionlinks.html());
		captionlinks.css('display', 'none');

		$("#specials-carousel")
			.on('slide.bs.carousel', function(evt) {
				var caption = $('#specials-carousel')
					.find('div.item:nth-child(' + ($(evt.relatedTarget)
						.index() + 1) + ') .carousel-caption h3');
				$('.special-caption-area h3')
					.html(caption.html());
				caption.css('display', 'none');

				var captionp = $('#specials-carousel')
					.find('div.item:nth-child(' + ($(evt.relatedTarget)
						.index() + 1) + ') .carousel-caption p');
				$('.special-caption-area p')
					.html(captionp.html());
				captionp.css('display', 'none');

				var captionlinks = $('#specials-carousel')
					.find('div.item:nth-child(' + ($(evt.relatedTarget)
						.index() + 1) + ') .carousel-caption .links');
				$('.special-caption-area .links')
					.html(captionlinks.html());
				captionlinks.css('display', 'none');
			});

		//* Init the wow script for CSS animation scroll effects
		new WOW()
			.init();

	});

//* Add class for sticky nav menu on scroll
$(window)
	.on('load scroll resize', function() {

		var pageTop = $(window)
			.scrollTop();
		var viewWidth = $(window)
			.width();

		if (viewWidth > 1240) {
			if (pageTop > 100) {
				$(".site-header")
					.addClass("navbar-fixed-top");
			} else {
				$(".site-header")
					.removeClass("navbar-fixed-top");
			}
		}

	});

// title equal heights
$(window)
	.on('load resize', function() {
		var maxHeight = 0;

		var viewWidth = $(window)
			.width();
		if (viewWidth > 768) {
			// Home specials title equal heights

			$(".home-specials-item h3")
				.each(function() {
					if ($(this)
						.height() > maxHeight) {
						maxHeight = $(this)
							.height();
					}
				});

			$(".home-specials-item h3")
				.height(maxHeight);

			// Home specials description equal heights
			$(".home-specials-item h3")
				.each(function() {
					if ($(this)
						.height() > maxHeight) {
						maxHeight = $(this)
							.height();
					}
				});

			$(".home-specials-item p")
				.height(maxHeight);

			// Rooms title equal heights

			$(".rooms-item h2")
				.each(function() {
					if ($(this)
						.height() > maxHeight) {
						maxHeight = $(this)
							.height();
					}
				});

			$(".rooms-item h2")
				.height(maxHeight);

			// Rooms title equal heights

			// $(".rooms-item p")
			//   .each(function() {
			//     if ($(this)
			//       .height() > maxHeight) {
			//       maxHeight = $(this)
			//         .height();
			//     }
			//   });
			//
			// $(".rooms-item p")
			//   .height(maxHeight);

		}

	});

//Mobile Redirect Popover

$(document)
	.ready(function() {
		var viewWidth = $(window)
			.width();
		if (viewWidth < 480) {
			if (!Cookies.get('mobilePopup')) {
				$('#mobileRedirect')
					.modal('show');
				Cookies.set('mobilePopup', 'valid', {
					expires: 0.0115,
					path: "/"
				}); // need to set the path to fix a FF bug
				setTimeout(function() {
					var map2 = new google.maps.Map(document.getElementById('popmap'), {
						zoom: 15,
						center: {
							lat: 40.749129,
							lng: -73.991691
						},
						disableDefaultUI: true
					});
					var noPoi = [{
						featureType: "poi",
						stylers: [{
							visibility: "off"
            }]
          }];

					map2.setOptions({
						styles: noPoi
					});
					var image = '/assets/images/loc.png';
					var popMarker = new google.maps.Marker({
						position: {
							lat: 40.749129,
							lng: -73.991691
						},
						map: map2,
						icon: image
					});

				}, 2000);

			}

		}

	});

//iframe hotel champ
var iframehotelchamp = setInterval(function() {
	if ($("iframe[src='https://lumen.hotelchamp.com/relay.html']").length > 0) {
		$("iframe[src='https://lumen.hotelchamp.com/relay.html']").attr("title", "hotel champ");
		clearInterval(iframehotelchamp);
	}
}, 60);

setTimeout(function() {

	//wyndow-carousel
	var iframewyndow = setInterval(function() {
		if ($("#iFrameResizer0").length > 0) {
			$("#iFrameResizer0").attr("title", "wyndow");
			clearInterval(iframewyndow);
		}
	}, 60);
}, 2000);
