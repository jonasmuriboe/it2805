function checkDoor(){
	document.getElementById("empty").innerHTML='<iframe type="text/html" style="display:none;" src="127.0.0.1:5000/api/door" style=""></iframe>';
	document.getElementsByTagName("iframe")[0].addEventListener("load", function(){
		var a = document.getElementsByTagName("iframe")[0];
		var b = JSON.parse(a.contentDocument.getElementsByTagName("pre")[0].innerHTML);
		console.log(b.isOpen.door);
		if(b.isOpen.door){
			document.getElementById("status").style.backgroundImage = "url('../img/Logo_green.png')";
			document.getElementById("header").style.background = "#9cd590";
			document.getElementById("logo").style.backgroundImage = "url('../img/Logo_round_green.png')"
		} else {
			document.getElementById("status").style.backgroundImage = "url('../img/Logo_white.png')";
			document.getElementById("header").style.background = "#ea9989";
			document.getElementById("logo").style.backgroundImage = "url('../img/Logo_round_white.png')"
		}
	});
}
addEventListener("load", checkDoor());