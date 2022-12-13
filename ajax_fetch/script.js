let bereken = document.getElementById('bereken');
let lengte = document.getElementById('lengte');
let gewicht = document.getElementById('gewicht');
let resultaat = document.getElementById("resultaat");
let input = document.getElementById("input");

let urlPHP = "BMI_extra.php"

gewicht.addEventListener('focus', function() {
	})

lengte.addEventListener('focus', function() {
		})

function clearResult(){
	}

function showResult(response){
	console.log(response);
	resultaat.innerHTML = response;
	resultaat.style.border = "solid #000";
	}

bereken.addEventListener('click', function() {
	let gewichtInput = 
	let lengteInput = 
	let urlString = urlPHP + "?gewicht=" + ;
	console.log(urlString);

	// maak een keuze AJAX of Fetch toepassen

	//makeAjaxCall(urlString, "GET").then(showResult);
	makeFetchCall(urlString).then(showResult);

	
	
});

