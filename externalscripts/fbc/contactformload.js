jQuery(document).ready(function() {
window.onload = function () {
/**    function addStyles(){
  var file = location.pathname.split( "/" ).pop();

  var link = document.createElement( "link" );
  link.href = "http://tlchatt.com/externalscripts/fbc/modalstyles.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );


}
addStyles();**/

var setCookie24 = function (name, value) {
		var date = new Date(),
			expires = 'expires=';
		date.setDate(date.getDate() + 1);
		expires += date.toGMTString();
		document.cookie = name + '=' + value + '; ' + expires + '; path=/';
}
var setCookie = function (name, value) {
		document.cookie = name + '=' + value + '; path=/';
}
 //to use above function setCookie('name', 'true');

var iframeWin = document.getElementById("myframe").contentWindow;
console.log(iframeWin);


function initiateModalMessage() {
iframeWin.postMessage(["initiateModal", 'doit'], "*");
}
var documentcookies = document.cookie;
  if  (documentcookies.includes("Downloaded_Ebook")) {
      	console.log('Has downloaded Ebook');
		}
	else if  (documentcookies.includes("Seen_Modal_Ever")) {
					console.log('Has seen modal before');
					if  (documentcookies.includes("Seen_Modal_24")) {
					console.log('Has seen modal in last day');
						}
					else {
							console.log('Has not seen modal in 24 hours');
							initiateModalMessage()
							setCookie('Seen_Modal_Ever', 'true');
							setCookie24('Seen_Modal_24', 'true');
						}
			}
	else{
					console.log('Has never seen modal');
					initiateModalMessage()
					setCookie('Seen_Modal_Ever', 'true');
					setCookie24('Seen_Modal_24', 'true');
				}



window.addEventListener('message', function(e) {
		  var iframe = $("#myframe");
		  var eventName = e.data[0];
		  var data = e.data[1];
		  switch(eventName) {
			case 'setZIndexMax':
			iframe.css('z-index', data);
			break;
      case 'setZIndexMin':
      iframe.css('z-index', data);
			break;
			case 'eBookDownloaded':
			setCookie('Downloaded_Ebook', 'true');
			break;
		  }
		}, false);

}
});