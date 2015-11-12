function func() {
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