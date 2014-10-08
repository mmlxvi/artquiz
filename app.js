$(document).ready(function() {

	var qCounter = 0;
	var score = 0;
	var userChoice;



function qArray(information, question, choice1, choice2, choice3, choice4, correctAns){
    this.information = information;
    this.question = question;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice4 = choice4;
    this.correctAns = correctAns;
}

	var qOne = new qArray("This American artist was famous for his work in the 1950s, in the period between Abstract Expressionism and Pop Art. In 1983, he won a Grammy Award for his album design of Talking Heads' album Speaking in Tongues.", 
							"Who painted this?", "Jasper Johns", "Cy Twombly", "Gerhard Richter",
							"Robert Rauschenberg", "Robert Rauschenberg");

	var qTwo = new qArray("paragraph about Basquiat, Warhol, Clemente collaboration", "This painting was a collaboration between Basquiat, Warhol, and this painter.", 
				"David Salle", "Yoko Ono", "Francesco Clemente", "Roy Lichtenstein", 4);

	var qThree = new qArray("paragraph about Krasner", "Who painted this?", "Helen Frankenthaler",
				 "Lee Krasner", "Georgia O'Keeffe", "Frida Kahlo", 3);

	var qFour = new qArray("paragraph about Rivera", "Which actor played Diego Rivera in Julie Taymor's 2002 film Frida?",
				"Javier Bardem", "Antonio Banderas", "Rubén Blades", "Alfred Molina", 5);

	var qFive = new qArray("paragraph about Rothko", "The Rothko Chapel is located in what American city?",
				  "Houston", "San Francisco", "Baltimore", "New Haven", 2);

	var qSix = new qArray("paragraph about Salle", "Who painted this?", "Julian Schnabel", "Jeff Koons",
				"Andy Warhol", "David Salle", 5);

	var qSeven = new qArray("Known primarily for his drip paintings like the one seen here, this earlier work something something something something something. It is interesting to note that something something and how that.", "How did Jackson Pollock die?", "in a car accident",
				   "he drowned", "in a plane crash", "heart attack", 3);

	var	qEight = new qArray("paragraph about Picasso", "Who painted this?", "George Braque", "Piet Mondrian", "Willem de Kooning",
					"Pablo Picasso", 5);

	var qNine = new qArray("paragraph about Willem de Kooning", "In what year was this painting most likely completed?",
				 "1915", "1945", "1975", "1995", 4);

	var qTen = new qArray("paragraph about Morris Louis", "Who painted this?", "Morris Louis", "Jackson Pollock", "Mark Rothko", "Jim Dine", 3);

var metaArray = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen];

function loadNext(qArray){
    $('#info').text(qArray.information);
    $('#question').text(qArray.question);
    $('#button1').text(qArray.choice1);
    $('#button2').text(qArray.choice2);
    $('#button3').text(qArray.choice3);
    $('#button4').text(qArray.choice4);
    $('#qNumber').text(questionCounter);
    $('#numberCorrect').text(score);

    /* console.log(qArray.correctAns); */
}

loadNext(metaArray[qCounter]);
$('#qNumber').text(qCounter + 1);


			
	$('.btn').click(function() {

		userChoice = $(this).text();
		console.log(userChoice);

		if (userChoice === qOne.correctAns) {
			
			score = score +1;
			$('#numberCorrect').text(score);
			$('#mainBox').hide();
			$('#response').show();
			$('#feedback').text('that is correct.')
			

		}

		else {
			$('#mainBox').hide();
			$('#response').show();
			$('#feedback').text('that is incorrect.')
		}

	$('#nextQ').click(function() {
				$('#response').hide();
				$('#mainBox').show();

			});

});




});