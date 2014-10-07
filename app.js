$(document).ready(function() {

	var questionCounter = 1;
	var correctNum = 0;
	var arrayNum = 0;


	var qOne = ["paragraph about Rauschenberg", "Jim Dine", "Gerhard Richter",
				"Jasper Johns", "Robert Rauschenberg", 4];

	$("#qNumber").text(questionCounter);
	$("#numberCorrect").text(correctNum);


			
	$("#nextQ").click(function() {

	if (questionCounter < 10) {

		questionCounter = questionCounter + 1;
		$("#qNumber").text(questionCounter);

		
	}

	else if (questionCounter = 11) {
		$("#qNumber").text(questionCounter);
		$("#nextQ").text("Play again?");
	}

	else {
		alert("start again?");
	}

	});
	



	
	
	
	


	


























});