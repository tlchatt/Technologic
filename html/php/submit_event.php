<?php

// Fetching Values From URL
$event_name = "my event name";
$event_location = "my event location";
$event_details = "my event details";
$email = "my event email";


$query = "INSERT INTO submit_event(event_name, event_location, event_details, email) VALUES ('$event_name', '$event_location', '$event_details','$email')";
$runquery = @mysqli_query ($connection, $query);

?>

