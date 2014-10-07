$(document).ready(function() {

	var questionCounter = 1;
	var correctNum = 0;
	var arrayNum = 0;


	var qOne = ["paragraph about Rauschenberg", "Who painted this?", "", "Jim Dine", "Gerhard Richter",
				"Jasper Johns", "Robert Rauschenberg", 5];

	var qTwo = ["paragraph about Willem de Kooning", "In what year was this painting most likely completed?",
				 "1915", "1945", "1975", "1995", 4];

	var qThree = ["paragraph about Picasso", "Who painted this?", "George Braque", "Piet Mondrian", "Willem de Kooning",
					"Pablo Picasso", 5];

	var qFour = [""]

	$("#qNumber").text(questionCounter);
	$("#numberCorrect").text(correctNum);


			
	$("#nextQ").click(function() {

	if (questionCounter < 9) {

		questionCounter = questionCounter + 1;
		$("#qNumber").text(questionCounter);

		
	}

	else if (questionCounter = 10) {
		$("#qNumber").text(questionCounter);
		$("#nextQ").remove();
	}

	else {
		alert("start again?");
	}

	});
	



	
	
	
	


	


























});