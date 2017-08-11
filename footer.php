
<div class="row">
  <!-- Modal Structure -->
  <div id="map-modal" class="modal bottom-sheet">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
        <iframe class="center-block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52269.34819526641!2d-85.33948668669117!3d35.03587594773376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88605dd7e5f9a2cd%3A0xb69da93d01ad7b2e!2sThe+Flying+Squirrel+Bar!5e0!3m2!1sen!2sus!4v1472656191316" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
        <!-- Modal Structure -->
  <div id="contact-modal" class="modal bottom-sheet">
    <div class="modal-content">
      <h4>Get in touch</h4>
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


  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text"><?php echo"$content $date2";?></h5>
          <p class="grey-text text-lighten-4">We are on a mission to bring value to our clients, helping them to achieve success in an online world. We make advanced digital marketing practical and accessible to our clients. </p>


        </div>
        <div class="col l3 s12">
          <h4 class="white-text">Advertising platforms</h4>
          <ul>
            <li><a class="white-text" href="http://tlchatt.com/google-adwords-advertising-management">Google</a></li>
            <li><a class="white-text" href="http://tlchatt.com/facebook-advertising-management">Facebook</a></li>
            <li><a class="white-text" href="http://tlchatt.com/#">Pinterest</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Search Engine and Social Optimization</h5>
          <ul>
            <li><a class="white-text" href="#!">Website Basics</a></li>
            <li><a class="white-text" href="#!">Social Signals</a></li>
            <li><a class="white-text" href="#!">Structured Data</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Designed and Optimized by <a class="orange-text text-lighten-3" href="http://tlchatt.com">Technologic</a>
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
