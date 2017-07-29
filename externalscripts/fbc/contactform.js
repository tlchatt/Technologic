jQuery(document).ready(function() {


  window.addEventListener('message', function(e) {
  		  var eventName = e.data[0];
  		  var data = e.data[1];
  		  switch(eventName) {
  			case 'initiateModal':
        console.log (eventName);
  			initiateModal();
  			break;
  		  }
  		}, false);



  $('#modal-close').click(function(){
    setTimeout(function () {
      $('#modal').modal('close');
    }, 500); // in milliseconds

  });


  function zIndexMax() {
        /*  var height = document.getElementsByTagName("html")[0].scrollHeight;*/
          window.parent.postMessage(["setZIndexMax", '9999'], "*");
        }
  function zIndexMin() {
                /*   var height = document.getElementsByTagName("html")[0].scrollHeight;*/
          window.parent.postMessage(["setZIndexMax", '-9999'], "*");
          }
  function eBookDownloaded() {
                /*   var height = document.getElementsByTagName("html")[0].scrollHeight;*/
          window.parent.postMessage(["eBookDownloaded", '-9999'], "*");
          }

function initiateModal(){

  $('.modal').modal({
 complete: function() {zIndexMin()}

  });

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
          eBookDownloaded();
      }
      else{
        submitForm();
        LaunchDownload();
        eBookDownloaded();
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