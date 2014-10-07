$(document).ready(function() {

	var questionCounter = 1;
	var correctNum = 0;
	var arrayName = 0;


	var qOne = ["Sample question text begins here. It might be long, it might be short, we don't know yet. But it will be entertaining and informative, for sure. Adding some more text here to fill it out. Maybe a little longer. And a little more here. And here.", "Who painted this?", "Jim Dine", "Gerhard Richter",
				"Jasper Johns", "Robert Rauschenberg", 5];

	var qTwo = ["paragraph about Basquiat, Warhol, Clemente collaboration", "This painting was a collaboration between Basquiat, Warhol, and this painter.", 
				"David Salle", "Yoko Ono", "Francesco Clemente", "Roy Lichtenstein", 4];

	var qThree = ["paragraph about Krasner", "Who painted this?", "Helen Frankenthaler",
				 "Lee Krasner", "Georgia O'Keeffe", "Frida Kahlo", 3];

	var qFour = ["paragraph about Rivera", "Which actor played Diego Rivera in Julie Taymor's 2002 film Frida?",
				"Javier Bardem", "Antonio Banderas", "Rubén Blades", "Alfred Molina", 5];

	var qFive = ["paragraph about Rothko", "The Rothko Chapel is located in what American city?",
				  "Houston", "San Francisco", "Baltimore", "New Haven", 2];

	var qSix = ["paragraph about Salle", "Who painted this?", "Julian Schnabel", "Jeff Koons",
				"Andy Warhol", "David Salle", 5];

	var qSeven = ["Known primarily for his drip paintings like the one seen here, this earlier work something something something something something. It is interesting to note that something something and how that.", "How did Jackson Pollock die?", "in a car accident",
				   "he drowned", "in a plane crash", "heart attack", 3];

	var	qEight = ["paragraph about Picasso", "Who painted this?", "George Braque", "Piet Mondrian", "Willem de Kooning",
					"Pablo Picasso", 5];

	var qNine = ["paragraph about Willem de Kooning", "In what year was this painting most likely completed?",
				 "1915", "1945", "1975", "1995", 4];

	var qTen = ["paragraph about Morris Louis", "Who painted this?", "Morris Louis", "Jackson Pollock", "Mark Rothko", "Jim Dine", 3];

	$('#info').text(qOne[0]);
	$('#question').text(qOne[1]);
	$('#button1').text(qOne[2]);
	$('#button2').text(qOne[3]);
	$('#button3').text(qOne[4]);
	$('#button4').text(qOne[5]);

	$("#qNumber").text(questionCounter);
	$("#numberCorrect").text(correctNum);




			
	$('.btn').click(function() {

	if (questionCounter < 9) {

		questionCounter = questionCounter + 1;
		$("#qNumber").text(questionCounter);

	}

	else if (questionCounter = 10) {
		$("#qNumber").text(questionCounter);
		alert('done');
	}

	else {
		alert("start again?");
	}

});
	



	
	
	
	


	


























});