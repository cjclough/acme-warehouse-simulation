/* use strict */

// variables
var bigStuffAvg = 17361;
var littleStuffAvg = 5;

// Collects the form and aggregates the data usefully
function submit(form) {
	// let request = new XMLHttpRequest();

	// request.open("GET", "acme.php"+
	// 					"?"+form.bunnies.name+"="+form.bunnies.value+
	// 					"&"+form.lbaskets.name+"="+form.lbaskets.value+
	// 					"&"+form.sbaskets.name+"="+form.sbaskets.value+
	// 					"&"+form.eggs.name+"="+form.eggs.value+
	// 					"&"+form.delivery.name+"="+form.delvery.value+
	// 					"&"+form.group.name+"="+form.group.checked);
	
	// request.onreadystatechange = function() {
	// 	if (request.readyState == 4) {
	// 		submit_callback();
	// 	}
	// }

	if iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

	var littleStuffDelay = doLittleStuff();
	var bigStuffDelay = doBigStuff();



	
	
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

function subimtCallback() {
	let processing = document.getElementById('processing');
	let textNode = document.createTextNode(request.responeText);
	let lineBreak = document.createElement('br');
	processingList.appendChild(textNode);
	processingList.appendChild(lineBreak);
}

function resetProcessing() {
	let processingList = document.getElementById('processing');
	processingList.innerText = "";
}