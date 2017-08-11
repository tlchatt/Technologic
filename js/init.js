(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(document).ready(function () {

      $('.slider').slider({
        indicators: false,
        interval: 10000,
        height: 500
      });

      //for google maps...
      // you want to enable map pointer events only on click;

      $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
      $('#canvas1').on('click', function () {
        $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
      });

      // you want to disable map pointer events when the mouse leave the canvas area;

      $("#map_canvas1").mouseleave(function () {
        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
      });

    }); // end of document ready


    //control nav scrolling
    function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top - 60},'slow');
    }

    $("#logo-container").click(function() {
      //  scrollToAnchor('services');
    });

    $("#scrollLink_services").click(function() {
      scrollToAnchor('services');
    });

    $("#scrollLink_testimonials").click(function() {
      scrollToAnchor('testimonials');
    });

    $("#scrollLink_location").click(function() {
      scrollToAnchor('location');
    });

    $("#scrollLink_contact").click(function() {
      scrollToAnchor('contact');
    });

    $("#scrollLink_about").click(function() {
      scrollToAnchor('about');
    });

    //control sideNav scrolling

    $('#scrollLink_sideservices').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sideservices").click(function() {
      scrollToAnchor('services');
    });

    $('#scrollLink_sidetestimonials').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sidetestimonials").click(function() {
      scrollToAnchor('testimonials');
    });

    $('#scrollLink_sidelocation').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sidelocation").click(function() {
      scrollToAnchor('location');
    });

    $('#scrollLink_sidecontact').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sidecontact").click(function() {
      scrollToAnchor('contact');
    });

    $('#scrollLink_sideabout').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sideabout").click(function() {
      scrollToAnchor('about');
    });


  });
})(jQuery); // end of jQuery name space