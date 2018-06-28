tempsFermeture = 0;

function Debute(URL, WIDTH, HEIGHT) {
	propFenetre = "left=50px, top=50px, width=" + WIDTH + ", height=" + HEIGHT;
	pub = window.open(URL, "pub", propFenetre);
	if(tempsFermeture) setTimeout("pub.close();", tempsFermeture*1000);
}

function PopUp() {
	url = "popup.html";
	width = 267;
	height = 103;
	delay = 2;
	timer = setTimeout("Debute(url, width, height)", delay*1000);
}
