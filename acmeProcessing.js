/* use strict */

// variables
var bStuffAvg = 17361;
var lStuffAvg = 5;

function submitOrder(form) {
	if (form.grouped.checked) {
		if (!canDeliver(form.delivery.value)) {
			updateClient("Sorry, we cannot fulfill your order on time.");
			return;
		}
	}	

	if (form.eggs.value > 0) {
		doLittleStuff(form.eggs.value, form.grouped.checked);
	}

	if (form.lbaskets.value > 0 || form.sbaskets.value > 0) {
		doBigStuff(form.lbaskets.value, form.sbaskets.value, form.grouped.checked);
	}

}

function canDeliver(days) {
	// get cookies
	let cookies = getCookies();
	// compare - you can skip BIGstuff's delay since it works in step with ACME
	if (cookies["lcookie"] > days) {
		return false;
	}
	return true;
}

function doLittleStuff(numEggs, grouped) {
	console.log("Test doLittleStuff().");
	let request = new XMLHttpRequest();
	request.open("GET", "littleStuff.php", true);
	if (grouped) {
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
					updateClient("LITTLEstuff shipped "+String(numEggs)+" toy Easter eggs to ACME.");
				
			}	
		}
	}
	else {
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				updateClient("LITTLEstuff delivered your order of "+String(numEggs)+" toy Easter eggs.");
			}	
		}
	}

	request.send();
}

function doBigStuff(numLBaskets, numSBaskets, grouped) {
	let request = new XMLHttpRequest();
	request.open("GET", "bigStuff.php", false);

	var message;
	if (numLBaskets > 0 && numSBaskets == 0) {
		message = grouped == "true" ? "BIGstuff shipped "+String(numLBaskets)+" large Easter baskets to ACME." : "BIGstuff delivered your order of "+String(numLBaskets)+" large Easter baskets.";
	}
	else if (numLBaskets == 0 && numSBaskets > 0) {
		message = grouped == "true" ? "BIGstuff shipped "+String(numSBaskets)+" small Easter baskets to ACME." : "BIGstuff delivered your order of "+String(numSBaskets)+" small Easter baskets.";
	}
	else if (numLBaskets > 0 && numSBaskets > 0) {
		message = grouped == "true" ? "BIGstuff shipped "+String(numLBaskets)+" large Easter baskets"+" and "+String(numSBaskets)+" small Easter baskets to ACME." : "BIGstuff delivered your order of "+String(numLBaskets)+" large Easter baskets and "+String(numSBaskets)+" small Easter baskets.";
	}

	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			updateClient(message);
		}	
	}
	request.send();
}

function resetProcessing() {
	let processingList = document.getElementById('processing');
	processingList.innerText = "";
}

function updateClient(update) {
	// get the processing area by id
	let processingList = document.getElementById("processing");

	let newNode = document.createTextNode(update);
	let lineBreak = document.createElement("br");
	let lineBreak2 = document.createElement("br");

	processing.appendChild(newNode);
	processing.appendChild(lineBreak);
	processing.appendChild(lineBreak2);
}

function getCookies() {
	let request = new XMLHttpRequest();
	request.open("GET", "acme.php?getCookies=1", false);
	request.send();
	if (request.status == 200) {
		return JSON.parse(request.responseText);
	} 
}

function updateCookies() {
	let request = new XMLHttpRequest();
	request.open("GET", "acme.php?updateCookies=1&lcookie="+String(lStuffAvg)+"&bcookie="+String(bStuffAvg), false);
	request.send();
}