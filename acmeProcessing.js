/* use strict */

// variables
var bStuffAvg = 17361;
var lStuffAvg = 5;

function submitOrder(form) {
	// updateClient("Order received. Please hold for one moment...");

	// if (!canDeliver()) {
	// 	updateClient("Sorry, we cannot fulfill your oder on time.");
	// 	return;
	// }

	updateCookies();
}

function canDeliver(days) {
	// get cookies

	// convert cookies to days

	// compare

}

function doLittleStuff() {
	let request = new XMLHttpRequest();
	request.open("GET", "littleStuff.php", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			return request.responseText;
		}	
	}
	request.send();
}

function doBigStuff() {
	let request = new XMLHttpRequest();
	request.open("GET", "bigStuff.php", false);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			return request.responseText;
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

	processing.appendChild(newNode);
	processing.appendChild(lineBreak);
}

function setCookies() {
	
}
// function createCookie(name) {
//     document.cookie = name+"="+value+expires+"; path=/; domain=./";
// }
function updateCookies() {
	let request = new XMLHttpRequest();
	request.open("GET", "acme.php?updateCookies=1&lcookie="+String(lStuffAvg)+"&bcookie="+String(bStuffAvg), false);
	request.send();
}