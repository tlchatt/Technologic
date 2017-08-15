(function($){
  $(function(){
    $(document).ready(function () {
      //$('.button-collapse').sideNav();
      $('.parallax').parallax();
      $('.slider').slider({
        indicators: false,
        interval: 6000,
        transition: 2000
      });


    }); // end of document ready

    //scrollfire mess
    var options = [
      {selector: '#servicesTitle', offset: 400, callback: function(el) {
        $('#servicesTitle').addClass("animated fadeInUp");
        $('#servicesTitle').removeClass("invisible");
      } },

      {selector: '#workTitle', offset: 400, callback: function(el) {
        $('#workTitle').addClass("animated fadeInUp");
        $('#workTitle').removeClass("invisible");
      } },

      {selector: '#aboutTitle', offset: 400, callback: function(el) {
        $('#aboutTitle').addClass("animated fadeInUp");
        $('#aboutTitle').removeClass("invisible");
      } },

      {selector: '#teamTitle', offset: 400, callback: function(el) {
        $('#teamTitle').addClass("animated fadeInUp");
        $('#teamTitle').removeClass("invisible");
      } },

      {selector: '#footerTitle', offset: 300, callback: function(el) {
        $('#footerTitle').addClass("animated fadeInUp");
        $('#footerTitle').removeClass("invisible");
      } }
    ];
    Materialize.scrollFire(options);


    //control nav scrolling
    function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }

    $("#scrollLink").click(function() {
      scrollToAnchor('services');
    })

    $('#scrollLink_services').click(function() {
    scrollToAnchor('services');
    })

    //control sideNav scrolling

    $('#scrollLink_sideservices').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sideservices").click(function() {
      scrollToAnchor('services');
    });

    $('#scrollLink_sidework').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sidework").click(function() {
      scrollToAnchor('work');
    });

    $('#scrollLink_sideabout').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sideabout").click(function() {
      scrollToAnchor('about');
    });

    $('#scrollLink_sidefooter').click(function() {
      $('#sidenav-overlay').trigger('click');
    })
    $("#scrollLink_sidefooter").click(function() {
      scrollToAnchor('footer');
    });


  });
})(jQuery); // end of jQuery name space
