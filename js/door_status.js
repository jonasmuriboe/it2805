function checkDoor(){
	document.getElementById("content").innerHTML='<iframe type="text/html" style="display:none;" src="http://hackerspace.idi.ntnu.no/api/door-api" style=""></iframe>';
	document.getElementsByTagName("iframe")[0].addEventListener("load", function(){
		var a = document.getElementsByTagName("iframe")[0];
		var b = JSON.parse(a.contentDocument.getElementsByTagName("pre")[0].innerHTML);
		console.log(b.isOpen.door);
		if(b.isOpen.door){
			document.getElementById("logo").style.backgroundImage = "url('../img/Logo_round_green.png')"
		} else {
			document.getElementById("logo").style.backgroundImage = "url('../img/Logo_round_white.png')"
		}
	});
}
addEventListener("load", checkDoor());