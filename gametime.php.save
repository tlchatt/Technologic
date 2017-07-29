<!doctype html>
<html>
<body>
<?php

echo '<h1>"Hello World"</h1>';
echo date("m")." "; 
echo date("d")." "; 
echo date("Y")." "; 
echo date("h:i:s A"); 

echo jddayofweek ( cal_to_jd(CAL_GREGORIAN, date("m"),date("d"), date("Y")) , 1 ); 


$filename = "imgurls.txt";
$xmldoc = fopen($filename, 'w');

$html="http://scottsfurniturecompany.com/living-room-furniture/";
$dom = new DOMDocument;
$dom->loadHTMLFile($html);

foreach($dom->getElementsByTagName('img') as $image)

{

$url=$image->getAttribute('src');
echo $url . "<br><br>";


fwrite($xmldoc,$url);
fclose($xmldoc);


}

 ?>
</body>
</html>


