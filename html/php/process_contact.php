<?php
// process.php

$errors         = array();      // array to hold validation errors
$data           = array();      // array to pass back data

// validate the variables ======================================================
    // if any of these variables don't exist, add an error to our $errors array

    if (empty($_POST['business_name'])){
        $errors['business_name'] = 'Business name is required.';
        }
    else {
        $business_name = trim($_POST['business_name']);
    }
    if (empty($_POST['business_location'])){
        $errors['business_location'] = 'Business location is required.';
    }
    else {
        $business_location = trim($_POST['business_location']);
    }
    if (empty($_POST['phone'])){
        $errors['phone'] = 'Phone number is required.';
    }
    else {
        $phone = trim($_POST['phone']);
    }
    if (empty($_POST['email'])){
        $errors['email'] = 'Email is required.';
    }
    else {
        $email = trim($_POST['email']);
    }



// return a response ===========================================================

    // if there are any errors in our errors array, return a success boolean of false
    if ( ! empty($errors)) {

        // if there are items in our errors array, return those errors
        $data['success'] = false;
        $data['errors']  = $errors;
    }

    else {
         require ('mysqli_connect.php');

        $query = "INSERT INTO contact_form(business_name, business_location, phone, email,submit_date) VALUES ('$business_name', '$business_location', '$phone','$email',NOW())";
        $runquery = @mysqli_query ($connection, $query);

        if ($runquery) {

        $data['success'] = true;
        $data['message'] = 'Success!';

        }
        else {

        $data['success'] = false;
        $data['errors']  = $errors;

        }

        mysqli_close($connection);

        // if there are no errors process our form, then return a message

        // DO ALL YOUR FORM PROCESSING HERE

        // THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

        // show a message of success and provide a true success variable
    }

    // return all our data to an AJAX call
    echo json_encode($data);
