<?php
require __DIR__ . '/vendor/autoload.php';

$firstName = $_POST["first-name"];
$lastName = $_POST["last-name"];
$email = $_POST["email"];
$name = $firstName ;
$name .= " " ;
$name .= $lastName ;

// prepare email body text

// send email

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.khungate@fourbridgescapital.com"
        $recipient = "khungate@fourbridgescapital.com";

        // Set the email subject.
        $subject = "Ebook Downloaded By $name";

        // Build the email content.
        $email_content = "Name: " . $name . "\n";
        $email_content .= "Email: " . $email . "\n\n";

        // Build the email headers.

        // Send the email.

        /**
         * This example shows settings to use when sending via Google's Gmail servers.
         */
        //SMTP needs accurate times, and the PHP time zone MUST be set
        //This should be done in your php.ini, but this is how to do it if you don't have access to that
        date_default_timezone_set('Etc/UTC');

        //Create a new PHPMailer instance
        $mail = new PHPMailer;
        //Tell PHPMailer to use SMTP
        $mail->isSMTP();
        //Enable SMTP debugging
        // 0 = off (for production use)
        // 1 = client messages
        // 2 = client and server messages
        $mail->SMTPDebug = 2;
        //Ask for HTML-friendly debug output
        $mail->Debugoutput = 'html';
        //Set the hostname of the mail server
        $mail->Host = 'smtp.gmail.com';
        // use
        // $mail->Host = gethostbyname('smtp.gmail.com');
        // if your network does not support SMTP over IPv6
        //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
        $mail->Port = 587;
        //Set the encryption system to use - ssl (deprecated) or tls
        $mail->SMTPSecure = 'tls';
        //Whether to use SMTP authentication
        $mail->SMTPAuth = true;
        //Username to use for SMTP authentication - use full email address for gmail
        $mail->Username = "greggorywiley@tlchatt.com";
        //Password to use for SMTP authentication
        $mail->Password = '$Techn0l0gic$';
        //Set who the message is to be sent from
        $mail->setFrom('greggorywiley@tlchatt.com', 'Fourbridges Modal');
        //Set an alternative reply-to address
        $mail->addReplyTo($email, $name);
        //Set who the message is to be sent to
        $mail->addAddress($recipient, 'G W');
        //Set the subject line
        $mail->Subject = $subject;
        //Read an HTML message body from an external file, convert referenced images to embedded,
        //convert HTML into a basic plain-text alternative body
        #$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
        //Replace the plain text body with one created manually
        $mail->Body  = $email_content;
        //Attach an image file
        #$mail->addAttachment('images/phpmailer_mini.png');
        //send the message, check for errors
        if (!$mail->send()) {
          echo "invalid" . $mail->ErrorInfo;
        } else {
               echo "success";
        }


        //Create a new PHPMailer instance
        $mail2 = new PHPMailer;
        //Tell PHPMailer to use SMTP
        $mail2->isSMTP();
        //Enable SMTP debugging
        // 0 = off (for production use)
        // 1 = client messages
        // 2 = client and server messages
        $mail2->SMTPDebug = 2;
        //Ask for HTML-friendly debug output
        $mail2->Debugoutput = 'html';
        //Set the hostname of the mail server
        $mail2->Host = 'smtp.gmail.com';
        // use
        // $mail->Host = gethostbyname('smtp.gmail.com');
        // if your network does not support SMTP over IPv6
        //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
        $mail2->Port = 587;
        //Set the encryption system to use - ssl (deprecated) or tls
        $mail2->SMTPSecure = 'tls';
        //Whether to use SMTP authentication
        $mail2->SMTPAuth = true;
        //Username to use for SMTP authentication - use full email address for gmail
        $mail2->Username = "greggorywiley@tlchatt.com";
        //Password to use for SMTP authentication
        $mail2->Password = '$Techn0l0gic$';
        //Set who the message is to be sent from
        $mail2->setFrom('greggorywiley@tlchatt.com', 'Fourbridges Capital Advisors');
        //Set an alternative reply-to address
        $mail2->addReplyTo('khungat@fourbridgescapital.com', 'Keely Hungate');
        //Set who the message is to be sent to
        $mail2->addAddress($email, $name);
        //Set the subject line
        $mail2->Subject = 'E-Book Download Link';
        //Read an HTML message body from an external file, convert referenced images to embedded,
        //convert HTML into a basic plain-text alternative body
        #$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
        //Replace the plain text body with one created manually
        $mail2->Body  = 'Thank you for your interest in our new Ebook "Start Here, An Insiders Guide To Selling Your Business". You may download the Ebook at your convenience via the following link https://goo.gl/ffokOc.' ;
        //Attach an image file
        #$mail->addAttachment('images/phpmailer_mini.png');
        //send the message, check for errors
        if (!$mail2->send()) {
          echo "invalid" . $mail->ErrorInfo;
        } else {
               echo "success";
        }


?>