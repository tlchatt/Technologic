jQuery(document).ready(function() {

  initiateModal();

  $('#modal-close').click(function(){
    setTimeout(function () {
      $('#modal').modal('close');
      }, 500); // in millisecon
  });


  function zIndexMax() {
        /*  var height = document.getElementsByTagName("html")[0].scrollHeight;*/
          window.parent.postMessage(["setZIndexMax", '9999'], "*");
        }
  function zIndexMin() {
                /*   var height = document.getElementsByTagName("html")[0].scrollHeight;*/
                window.parent.postMessage(["setZIndexMax", '-9999'], "*");
          }
function initiateModal(){

  $('.modal').modal();

  setTimeout(function() {
       $('#modal').modal('open');
      zIndexMax();
    }, 13000);

}

function isiPhone(){
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    }

function LaunchDownload(){
    /*  window.location = 'http://tlchatt.com/externalscripts/fbc/Start+Here_Guide+to+Selling_FourBridges.pdf'; */
      setTimeout(function () {
        $('#modal').modal('close');
        }, 500); // in millisecon
        $("body").append("<iframe src='" + "http://tlchatt.com/externalscripts/fbc/Start+Here_Guide+to+Selling_FourBridges.pdf"+ "' style='display: none;' ></iframe>");
        zIndexMin();
      /*  function Download(url) {
            document.getElementById('my_iframe').src = url;
        };*/

      }

  $("#contactForm").submit(function(event){
      // cancels the form submission
      event.preventDefault();
      if(isiPhone()){
        submitFormIP();
        alert('Your Ebook Download link has been sent via email.');
        setTimeout(function () {
            $('#modal').modal('close');
          }, 500); // in millisecon
          zIndexMin();
      }
      else{
        submitForm();
        LaunchDownload();

      }

  });;
  function submitFormIP(){
      // Initiate Variables With Form Content
      var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
      var email = $("#email").val();
      $.ajax({
          type: "POST",
          url: "http://tlchatt.com/externalscripts/fbc/contactformsubmitIP.php",
          data: "first-name=" + firstName + "&last-name=" + lastName + "&email=" + email,
          success : function(text){
              if (text == "success"){
                  formSuccess();
              }
          }
      });
  }
  function submitForm(){
      // Initiate Variables With Form Content
      var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
      var email = $("#email").val();
      $.ajax({
          type: "POST",
          url: "http://tlchatt.com/externalscripts/fbc/contactformsubmit.php",
          data: "first-name=" + firstName + "&last-name=" + lastName + "&email=" + email,
          success : function(text){
              if (text == "success"){
                  formSuccess();
              }
          }
      });
  }
  function formSuccess(){
      $( "#msgSubmit" ).removeClass( "hidden" );
  }
});