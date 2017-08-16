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
  //services
      {selector: '#servicesTitle', offset: 300, callback: function(el) {
        $('#servicesTitle').addClass("animated fadeInUp");
        $('#servicesTitle').removeClass("invisible");
      } },
      {selector: '#servicesDiv', offset: 300, callback: function(el) {
        $('#servicesDiv').addClass("animated fadeInUp");
        $('#servicesDiv').removeClass("invisible");
      } },
      {selector: '#servicesOffering1', offset: 300, callback: function(el) {
        $('#servicesOffering1').addClass("animated fadeInUp");
        $('#servicesOffering1').removeClass("invisible");
      } },
      {selector: '#servicesOffering2', offset: 250, callback: function(el) {
        $('#servicesOffering2').addClass("animated fadeInUp");
        $('#servicesOffering2').removeClass("invisible");
      } },
      {selector: '#servicesOffering3', offset: 350, callback: function(el) {
        $('#servicesOffering3').addClass("animated fadeInUp");
        $('#servicesOffering3').removeClass("invisible");
      } },
      {selector: '#servicesOffering4', offset: 300, callback: function(el) {
        $('#servicesOffering4').addClass("animated fadeInUp");
        $('#servicesOffering4').removeClass("invisible");
      } },
      {selector: '#servicesOffering5', offset: 250, callback: function(el) {
        $('#servicesOffering5').addClass("animated fadeInUp");
        $('#servicesOffering5').removeClass("invisible");
      } },
      {selector: '#servicesOffering6', offset: 350, callback: function(el) {
        $('#servicesOffering6').addClass("animated fadeInUp");
        $('#servicesOffering6').removeClass("invisible");
      } },
  //work
      {selector: '#workTitle', offset: 300, callback: function(el) {
        $('#workTitle').addClass("animated fadeInUp");
        $('#workTitle').removeClass("invisible");
      } },
      {selector: '#workImg1', offset: 300, callback: function(el) {
        $('#workImg1').addClass("animated fadeInUp");
        $('#workImg1').removeClass("invisible");
      } },
      {selector: '#workImg2', offset: 250, callback: function(el) {
        $('#workImg2').addClass("animated fadeInUp");
        $('#workImg2').removeClass("invisible");
      } },
      {selector: '#workImg3', offset: 250, callback: function(el) {
        $('#workImg3').addClass("animated fadeInUp");
        $('#workImg3').removeClass("invisible");
      } },
      {selector: '#workImg4', offset: 300, callback: function(el) {
        $('#workImg4').addClass("animated fadeInUp");
        $('#workImg4').removeClass("invisible");
      } },

  //about
      {selector: '#aboutTitle', offset: 300, callback: function(el) {
        $('#aboutTitle').addClass("animated fadeInUp");
        $('#aboutTitle').removeClass("invisible");
      } },
      {selector: '#aboutImg1', offset: 300, callback: function(el) {
        $('#aboutImg1').addClass("animated fadeInUp");
        $('#aboutImg1').removeClass("invisible");
      } },
      {selector: '#aboutImg2', offset: 250, callback: function(el) {
        $('#aboutImg2').addClass("animated fadeInUp");
        $('#aboutImg2').removeClass("invisible");
      } },
      {selector: '#aboutImg3', offset: 350, callback: function(el) {
        $('#aboutImg3').addClass("animated fadeInUp");
        $('#aboutImg3').removeClass("invisible");
      } },
      {selector: '#aboutTxt1', offset: 200, callback: function(el) {
        $('#aboutTxt1').addClass("animated fadeInUp");
        $('#aboutTxt1').removeClass("invisible");
      } },
      {selector: '#aboutTxt2', offset: 200, callback: function(el) {
        $('#aboutTxt2').addClass("animated fadeInUp");
        $('#aboutTxt2').removeClass("invisible");
      } },

  //team
      {selector: '#teamTitle', offset: 300, callback: function(el) {
        $('#teamTitle').addClass("animated fadeInUp");
        $('#teamTitle').removeClass("invisible");
      } },
      {selector: '#teamDiv', offset: 300, callback: function(el) {
        $('#teamDiv').addClass("animated fadeInUp");
        $('#teamDiv').removeClass("invisible");
      } },
      {selector: '#team1', offset: 300, callback: function(el) {
        $('#team1').addClass("animated fadeInUp");
        $('#team1').removeClass("invisible");
      } },
      {selector: '#team2', offset: 250, callback: function(el) {
        $('#team2').addClass("animated fadeInUp");
        $('#team2').removeClass("invisible");
      } },
      {selector: '#team3', offset: 250, callback: function(el) {
        $('#team3').addClass("animated fadeInUp");
        $('#team3').removeClass("invisible");
      } },
      {selector: '#team4', offset: 300, callback: function(el) {
        $('#team4').addClass("animated fadeInUp");
        $('#team4').removeClass("invisible");
      } },

  //footer
      {selector: '#footerTitle', offset: 200, callback: function(el) {
        $('#footerTitle').addClass("animated fadeInUp");
        $('#footerTitle').removeClass("invisible");
      } },
      {selector: '#footerImg', offset: 200, callback: function(el) {
        $('#footerImg').addClass("animated fadeInUp");
        $('#footerImg').removeClass("invisible");
      } },
      {selector: '#footerTxt1', offset: 100, callback: function(el) {
        $('#footerTxt1').addClass("animated fadeInUp");
        $('#footerTxt1').removeClass("invisible");
      } },
      {selector: '#footerTxt2', offset: 100, callback: function(el) {
        $('#footerTxt2').addClass("animated fadeInUp");
        $('#footerTxt2').removeClass("invisible");
      } },
      {selector: '#footerTxt3', offset: 100, callback: function(el) {
        $('#footerTxt3').addClass("animated fadeInUp");
        $('#footerTxt3').removeClass("invisible");
      } },
      {selector: '#footerSocial1', offset: 5, callback: function(el) {
        $('#footerSocial1').addClass("animated fadeInUp");
        $('#footerSocial1').removeClass("invisible");
      } },
      {selector: '#footerSocial2', offset: 50, callback: function(el) {
        $('#footerSocial2').addClass("animated fadeInUp");
        $('#footerSocial2').removeClass("invisible");
      } },
      {selector: '#footerSocial3', offset: 20, callback: function(el) {
        $('#footerSocial3').addClass("animated fadeInUp");
        $('#footerSocial3').removeClass("invisible");
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
