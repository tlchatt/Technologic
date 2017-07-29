<?php
// first we use php's date command to find out the day of the week
$date = date('l');
$date2 = date('F jS');
// our switch statement will assess which day of the week it is and
// assign our $content as assigned.
switch ($date) {
  case 'Sunday':
    $content = "Sunday";
    break;
  case 'Monday':
    $content = "Monday";
    break;
  case 'Tuesday':
    $content = "Tuesday";
    break;
  case 'Wednesday':
    $content = "Wednesday";
    break;
  case 'Thursday':
    $content = "Thursday";
    break;
  case 'Friday':
    $content = "Friday";
    break;
  case 'Saturday':
    $content = "Saturday";
    break;
}
?>

