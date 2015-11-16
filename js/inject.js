//Injects the most used html into all webpages, i.e the footer, nav-bar and header.
//This saves us a lot of code in the html documents.

function func() {
	document.getElementById('navbar').innerHTML = '<div id="menu">'+
            '<ul>'+
                '<li><a href="../pages/index.html">HJEM</a></li>'+
                '<li><a href="../pages/aboutus.html">OM OSS</a></li>'+
                '<li><a href="#" onmouseover="mopen('+"'m1'"+')" onmouseout="mclosetime()">UNDERGRUPPER</a>'+
                	'<div id="m1" onmouseover="mcancelclosetime()" onmouseout="mclosetime()">'+
                		'<a href="../pages/dev.html"> DEV </a>'+
                		'<a href="../pages/pr.html"> PR </a>'+
                		'<a href="../pages/laboperatorene.html"> Labops </a>'+
                		'<a href="../pages/prosjektgruppa.html"> Prosjektgruppa </a>'+
                	'</div>'+
                '</li>'+
                '<li><a href="../pages/equipment.html">UTSTYR</a></li>'+
                '<li><a href="../pages/event.html">ARRANGEMENT</a></li>'+
                '<li><a href="../pages/contactus.html">KONTAKT</a></li>'+
            '</ul>'+
	    '</div>';

	document.getElementById('footer').innerHTML = '<table id="links">'+
			'<tr>'+
				'<th>Har du spørsmål?</th>'+
				'<th><a href="http://wikipedia.org">Hackerspace NTNU Wiki</a></th>'+
				'<th><a href="http://ntnu.edu/idi/">IDI NTNU</a></th>'+
			'</tr>'+
			'<tr>'+
				'<th>Ta kontakt via <a href="mailto:hackerspace@idi.ntnu.no">hackerspace@idi.ntnu.no</a></th>'+
				'<th><a href="https://www.facebook.com/hackerspacentnu">Hackerspace NTNU på Facebook</a></th>'+
				'<th><a href="https://abakus.no/">Abakus</a></th>'+
			'</tr>'+
			'<tr>'+
				'<th> eller kom innom!</th>'+
				'<th><a href="https://github.com/hackerspace-ntnu/">Hackerspace NTNU på github</a></th>'+
				'<th><a href="https://online.ntnu.no/">Online</a></th>'+
			'</tr>'+
		'</table>';
	}

addEventListener("load", func());