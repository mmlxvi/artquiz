$(document).ready(function() {

	var questionCounter = 1;
	var correctNum = 0;
	var arrayNum = 0;


	var qOne = ["paragraph about Rauschenberg", "Who painted this?", "", "Jim Dine", "Gerhard Richter",
				"Jasper Johns", "Robert Rauschenberg", 5];

	var qTwo = ["In what year was this painting completed?",
				"paragraph about Willem de Kooning", "1915", "1945", "1975", "1995", 4];

	var qThree = ["Who painted this?", "paragraph about Picasso", "George Braque", "Piet Mondrian", "Willem de Kooning",
					"Pablo Picasso", 5];

	var qFour = [""]

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