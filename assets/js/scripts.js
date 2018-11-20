$('#rd-carousel, #myCarousel').carousel({
  interval: false
});

$(window).on('load scroll resize', function() {

  var mheight = $(window).height();
  var mscroll = $(window).scrollTop();
  var mwidth = $(window).width();

  if (mwidth > 1240) {
    if (mscroll > 100) {
      $(".header-wrapper").addClass("fixed-header-wrapper");
      $("body").addClass("body-padd-sticky");
    } else {
      $(".header-wrapper").removeClass("fixed-header-wrapper");
      $("body").removeClass("body-padd-sticky");
    }
  }

  if (mwidth < 1240) {
    $(".header-wrapper").addClass("fixed-header-device");
    $("body").addClass("body-padd-sticky");
    $(".header-wrapper").removeClass("fixed-header-wrapper");

  } else {
    $(".header-wrapper").removeClass("fixed-header-device");
  }

});

$(document).ready(function() {

  $(".filter").on("click", function() {
    var $this = $(this);
    // if we click the active tab, do nothing
    if (!$this.hasClass("active")) {
      $(".filter").removeClass("active");
      $this.addClass("active"); // set the active tab
      var $filter = $this.data("rel"); // get the data-rel value from selected tab and set as filter
      $filter == 'all' ? // if we select "view all", return to initial settings and show all
        $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn() : // otherwise
        $(".fancybox").fadeOut(0).filter(function() {
          return $(this).data("filter") == $filter; // set data-filter value as the data-rel value of selected tab
        }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
    } // if
  }); // on

});

$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".main-menu").slideToggle(300);
  });
  $('#lightgallery').lightGallery({
    selector: '.item',
    counter: false,
    fullScreen: false
  });
  $(".room-rate-holder").on("click", function() {
    $(".booking-widget form").submit();
  });
});

$('#homeCarousel,#specialsCarousel,#events-carousel').carousel({
  interval: 7000,
  cycle: true,
  nav: true
});

// title equal heights

$(window).on('load resize', function() {
  var maxHeight = 0;

  var mwidth = $(window).width();
  if (mwidth > 768) {
    // Home specials title equal heights

    $(".home-specials-item h3").each(function() {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });

    $(".home-specials-item h3").height(maxHeight);

    // Home specials description equal heights
    $(".home-specials-item h3").each(function() {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });

    $(".home-specials-item p").height(maxHeight);

    // Rooms title equal heights

    $(".rooms-item h2").each(function() {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });

    $(".rooms-item h2").height(maxHeight);

    // Rooms title equal heights

    $(".rooms-item p").each(function() {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });

    $(".rooms-item p").height(maxHeight);

  }

  //$('.owl-carousel').owlCarousel({
  //    stagePadding: 50,
  //    loop:true,
  //    margin:10,
  //    items:1,
  //    lazyLoad: true,
  //    nav:true,
  //
  //})

});

/*move caption area out of carousel for rooms*/

/*move caption area out of carousel for rooms*/

jQuery(function($) {

  setTimeout(function() {
    $('#rooms-carousel, #offers-carousel ').carousel({
      interval: 5000,
      cycle: true,
      nav: true
    });
    $(' #roomscroll, #offerscroll').carousel({
      interval: false,
      cycle: true,
      nav: true
    });

    $('#rooms-carousel, #offers-carousel ').on('slide.bs.carousel', function(ev) {
      var direction = ev.direction == 'right' ? 'prev' : 'next';
      $('#roomscroll, #offerscroll').carousel(direction);
    });

  }, 2000);

});

jQuery(function($) {

  setTimeout(function() {
    $('#offers-carousel ').carousel({
      interval: 5000,
      cycle: true,
      nav: true
    });
    $(' #offerscroll').carousel({
      interval: false,
      cycle: true,
      nav: true
    });

    $('#offers-carousel ').on('slide.bs.carousel', function(ev) {
      var direction = ev.direction == 'right' ? 'prev' : 'next';
      $('#offerscroll').carousel(direction);
    });

  }, 2000);

});

/*move caption area out of carousel for specials*/

jQuery(function($) {
  $('#specials-carousel').carousel();
  var caption = $('#specials-carousel').find('div.item:nth-child(1) .carousel-caption h3');
  $('.special-caption-area h3').html(caption.html());
  caption.css('display', 'none');

  var captionp = $('#specials-carousel').find('div.item:nth-child(1) .carousel-caption p');
  $('.special-caption-area p').html(captionp.html());
  captionp.css('display', 'none');

  var captionlinks = $('#specials-carousel').find('div.item:nth-child(1) .carousel-caption .links');
  $('.special-caption-area .links').html(captionlinks.html());
  captionlinks.css('display', 'none');

  $("#specials-carousel").on('slide.bs.carousel', function(evt) {
    var caption = $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption h3');
    $('.special-caption-area h3').html(caption.html());
    caption.css('display', 'none');

    var captionp = $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption p');
    $('.special-caption-area p').html(captionp.html());
    captionp.css('display', 'none');

    var captionlinks = $('#specials-carousel').find('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption .links');
    $('.special-caption-area .links').html(captionlinks.html());
    captionlinks.css('display', 'none');
  });
});
