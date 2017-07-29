<?PHP

DEFINE ('DB_USER', 'tluser');
DEFINE ('DB_PASSWORD', '*Techn0l0gic*');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'Technologic');

$connection =@mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die ('Could not connect to MySQL: '.mysqli_connect_error());

mysqli_set_charset($connection, 'utf8');
