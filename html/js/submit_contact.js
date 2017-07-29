// magic.js
$(document).ready(function() {

    // process the form
    $('#contact_form').submit(function(event) {

        $('#business_name_id').removeClass('validate invalid'); // remove the error class
        $('#business_location_id').removeClass('validate invalid');
        $('#phone_id').removeClass('validate invalid');
        $('#email_id').removeClass('validate invalid');
    // remove the error text
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'business_name'              : $('#business_name_id').val(),
            'business_location'              : $('#business_location_id').val(),
            'phone'              : $('#phone_id').val(),
            'email'              : $('#email_id').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : '../php/process_contact.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
        .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
                if ( ! data.success) {

                    // handle errors for name ---------------
                    if (data.errors.event_name) {
                        $('#business_name_id').addClass('validate invalid'); // add the error class to show red input
                    }

                    // handle errors for email ---------------
                    if (data.errors.event_location) {
                        $('#business_location_id').addClass('validate invalid'); // add the error class to show red input
                    }

                    // handle errors for email ---------------
                    if (data.errors.event_details) {
                        $('#phone_id').addClass('validate invalid'); // add the error class to show red input
                    }
                    // handle errors for superhero alias ---------------
                    if (data.errors.email) {
                        $('#email_id').addClass('validate invalid'); // add the error class to show red input
                    }

                }
                else {

                    // ALL GOOD! just show the success message!
                    $('#contact_form').append('<div class="alert alert-success">' + data.message + '</div>');

                    // usually after form submission, you'll want to redirect
                    // window.location = '/thank-you'; // redirect a user to another page
                    alert('success'); // for now we'll just alert the user

                }

            })
            // using the fail promise callback
        .fail(function(data) {

        // show any errors
        // best to remove for production
        console.log(data);

            });
event.preventDefault();

    });

        // stop the form from submitting the normal way and refreshing the page

});
