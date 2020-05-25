function date()
	{
		var today = new Date();
		
		var day = today.getDate();
		var month = today.getMonth()+1;
		var year = today.getFullYear();
		
		var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
		var min = today.getMinutes();
		if (min<10) min = "0"+min;
		
		var sec = today.getSeconds();
		if (sec<10) sec = "0"+sec;
		
		document.getElementById("zegar").innerHTML = day + "/" + month + "/" + year + " | " + hour + ":" + min + ":" + sec;
		 
		setTimeout("date()",1000);
	}