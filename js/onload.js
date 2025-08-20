function openSocials() {
	document.getElementById("cli1").classList.remove("clickedinfo");
	document.getElementById("cli1").classList.add("clickedinfo2");
}

function closeSocials() {
	document.getElementById("cli1").classList.remove("clickedinfo2");
	document.getElementById("cli1").classList.add("clickedinfo");
}

function openPort() {
	document.getElementById("port1").classList.remove("hide")
}

function closePort() {
	document.getElementById("port1").classList.add("hide")
}