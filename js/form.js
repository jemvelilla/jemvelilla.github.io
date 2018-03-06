
	function myFunction() {
	    var txt;
	    var person = prompt("Please enter your FULL name: (answer in all caps)", "");
	    if (person == "REHD GARCIA COLIPANO") {
	       	mySecondFunction();
	    } else {
	        alert("Wrong answer. Try Again.");
	    }
	    document.getElementById("demo").innerHTML = txt;
	}
	
	function mySecondFunction(){
		 var txt;
		    var answer = prompt("To where did you first accompanied me to buy my pageant heels? (answer in all caps)", "");
		    if (answer == "DIVISORIA") {
		       	myThirdFunction();
		    } else {
		        alert("Wrong answer. Try Again.");
		    }
		    document.getElementById("demo").innerHTML = txt;
	}
	
	function myThirdFunction(){
		 var txt;
		    var answer = prompt("What is my favorite color? (answer in all caps)", "");
		    if (answer == "PINK") {
		       	myFourthFunction();
		    } else {
		        alert("Wrong answer. Try Again.");
		    }
		    document.getElementById("demo").innerHTML = txt;
	}

	function myFourthFunction(){
		 var txt;
		    var answer = prompt("When did we get back together? (answer in all caps; Clue: July; include the year; no comma, spaces only; format: MONTH DD YYYY)", "");
		    if (answer == "JULY 20 2016") {
		       	myFifthFunction();
		    } else {
		        alert("Wrong answer. Try Again.");
		    }
		    document.getElementById("demo").innerHTML = txt;
	}
	
	function myFifthFunction(){
		 var txt;
		    var answer = prompt("In what room in Roque Ruano did you held my hand for the first time? (answer in all caps; no shortcuts)", "");
		    if (answer == "PHYSICS LABORATORY") {
		    	window.location.href = "iiiiiiiiiiiiillllllllllllllloooooooooooovvvvvvvvvvvveeeeeeeeeeeyyyyyyyyoooooooooooouuuuuuuuu.html";
		    } else {
		        alert("Wrong answer. Try Again.");
		    }
		    document.getElementById("demo").innerHTML = txt;
	}