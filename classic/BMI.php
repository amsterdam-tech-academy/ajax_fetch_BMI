<?php
	$gewicht = $_GET["gewicht"];
	$lengte =  $_GET["lengte_cm"];
	BMIcalc($gewicht,$lengte);

function BMIcalc($gewicht,$lengte){
	$lengte = $lengte/100;
	$BMI = round($gewicht / ($lengte*$lengte), 1);
	echo "Uw gewicht is " . "$gewicht" . " kg" . "<br>" .
	"Uw lengte is " . "$lengte" . " m" . "<br>" .
	"Uw BMI is " . $BMI . "<br>";
	}
?>
