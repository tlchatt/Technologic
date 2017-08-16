
<div class="row">
  <a id="footer" name="footer"></a>
  <!-- Modal Structure -->
  <div id="map-modal" class="modal bottom-sheet">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
      <iframe class="center-block" src="" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  <!-- Modal Structure -->
  <div id="contact-modal" class="modal bottom-sheet">
    <div class="modal-content">
      <h4> in touch</h4>
      <p>We are here to help</p>
      <div class="row">

        <form id="contact_form" class="col s12" action="/php/process_contact.php" method="POST">
          <div class="row">
            <div class="input-field col s6">
              <input id="business_name_id" type="text" class="validate">
              <label for="business_name_label" data-error="wrong" data-success="right">Business Name</label>
            </div>
            <div class="input-field col s6">
              <input id="business_location_id" type="text" class="validate">
              <label for="business_location_label" data-error="wrong" data-success="right">Business Location</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="phone_id" type="text" class="validate">
              <label for="phone_label" data-error="wrong" data-success="right">Your Phone</label>
            </div>
            <div class="input-field col s6">
              <input id="email_id" type="email" class="validate">
              <label for="email_label" data-error="wrong" data-success="right">Your Email</label>
            </div>
            <button type="submit"  class="btn waves-effect waves-light blue darken-2">Submit<i class="material-icons right">send</i></button>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-footer">
    </div>
  </div>
</div>













<footer class="page-footer no-padding" style="background-color: #333;">
  <div class="section">
    <h4 id="footerTitle" class="invisible center thin">GET IN TOUCH</h4>
  </div>
  <div id="footerImg" class="invisible center">
    <img class="z-depth-2 tl-circle" style="height: 75px; width: 75px;" src="./img/gw_suit.png">
    <p class="light">Have questions? Give Greg a call.</p>
    <p>
      <a href="tel:423-377-6111" class="thin white-text"><i class="fa fa-mobile" aria-hidden="true"></i>&nbsp; 423.377.6111</a>
    </p>
  </div>

  <div class="row section">
    <div id="footerTxt1" class="invisible col s12 m4 center light">
      <a href="https://www.google.com/maps/place/Technologic/@35.0472784,-85.3093526,17z/data=!3m1!4b1!4m5!3m4!1s0x88605c5c582c5051:0x2daa8379d07588fa!8m2!3d35.0472784!4d-85.3071586" class="white-text light"><i class="fa fa-map-o" aria-hidden="true"></i>&nbsp; 736 Georgia Ave, Chattanooga, TN 37402,</a>
    </div>
    <div id="footerTxt2" class="invisible col s12 m4 center light">

    </div>
    <div id="footerTxt3" class="invisible col s12 m4 center light" >
      <a href="mailto:gw@tlchatt.com" class="white-text light"><i class="fa fa-paper-plane-o" aria-hidden="true"></i>&nbsp gw@tlchatt.com</a>
    </div>
  </div>

  <div class="container section" style="width: 25%; padding: 60px 0;">
    <div class="row">
      <div id="footerSocial1" class="invisible col s4 center-align">
        <div class="tl-circle hoverable-circle hoverable valign-wrapper">
          <i class="show-on-medium hide-on-small-only hide-on-large-only fa fa-facebook fa-2x" aria-hidden="true"></i>
          <i class="show-on-large hide-on-med-and-down fa fa-facebook fa-3x" aria-hidden="true"></i>
          <i class="show-on-small hide-on-med-and-up fa fa-facebook" aria-hidden="true"></i>
        </div>
      </div>
      <div id="footerSocial2" class="invisible col s4 center-align">
        <div class="tl-circle hoverable-circle hoverable valign-wrapper">
          <i class="show-on-medium hide-on-small-only hide-on-large-only fa fa-google fa-2x" aria-hidden="true"></i>
          <i class="show-on-large hide-on-med-and-down fa fa-google fa-3x" aria-hidden="true"></i>
          <i class="show-on-small hide-on-med-and-up fa fa-google" aria-hidden="true"></i>
        </div>
      </div>
      <div id="footerSocial3" class="invisible col s4 center-align">
        <div class=" tl-circle hoverable hoverable-circle valign-wrapper">
          <i class="show-on-medium hide-on-small-only hide-on-large-only fa fa-instagram fa-2x" aria-hidden="true"></i>
          <i class="show-on-large hide-on-med-and-down fa fa-instagram fa-3x" aria-hidden="true"></i>
          <i class="show-on-small hide-on-med-and-up fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>


</footer>


<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="./js/bin/materialize.js"></script>
<script src="./js/submit_contact.js"></script>
<script src="./js/init.js"></script>

</body>
</html>
