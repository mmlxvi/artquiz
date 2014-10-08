$(document).ready(function() {

	var qCounter = 0;
	var score = 0;
	var userChoice;



function qArray(information, question, choice1, choice2, choice3, choice4, correctAns, txtForFdbck){
    this.information = information;
    this.question = question;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice4 = choice4;
    this.correctAns = correctAns;
    this.txtForFdbck = txtForFdbck;
}

	var qOne = new qArray("This American artist rose to fame in the 1950s, during the period between Abstract Expressionism and Pop Art. In 1983, he won a Grammy Award for his album design of the Talking Heads album Speaking in Tongues.", 
							"Who painted this?", "Jasper Johns", "Cy Twombly", "Gerhard Richter",
							"Robert Rauschenberg", "Robert Rauschenberg", "This silkscreen painting, Retroactive I, was created by Rauschenberg in the summer of 1963, a few months before Kennedy's assassination.");

	var qTwo = new qArray("This painting was created as part of a collaborative series by three well-known artists in 1984. The artists were Jean Michel Basquiat, Andy Warhol, and an Italian painter whose work is prominently featured in the 1998 film adaptation of Charles Dickens' Great Expectations.", "Who is the third artist?", 
				"David Salle", "Yoko Ono", "Francesco Clemente", "Roy Lichtenstein", "Francesco Clemente", "This painting, titled Alba's Breakfast,");

	var qThree = new qArray("paragraph about Krasner", "Who painted this?", "Helen Frankenthaler",
				 "Lee Krasner", "Georgia O'Keeffe", "Frida Kahlo", "Lee Krasner", "Hans Hoffman, one of Krasner's teachers once remarked that her work was 'so good you would not know it was painted by a woman.'");

	var qFour = new qArray("This Mexican painter was portrayed by Rubén Blades in the 1999 film Cradle Will Rock, and by Alfred Molina in Julie Taymor's Frida Kahlo biopic in 2002.", "Who is the painter?",
				"José Chávez Morado", "Salvador Corona", "Fernando Leal", "Diego Rivera", "Diego Rivera", "text about Rivera");

	var qFive = new qArray("paragraph about Rothko", "The Rothko Chapel is located in what American city?",
				  "Houston", "San Francisco", "Baltimore", "New Haven", "Houston", "text about chapel");

	var qSix = new qArray("paragraph about Salle", "Who painted this?", "Julian Schnabel", "Jeff Koons",
				"Andy Warhol", "David Salle", "David Salle", "text about Salle");

	var qSeven = new qArray("Known primarily for his drip paintings like the one seen here, this earlier work something something something something something. It is interesting to note that something something and how that.", "How did Jackson Pollock die?", "in a car accident",
				   "he drowned", "in a plane crash", "heart attack", "in a car accident");

	var	qEight = new qArray("paragraph about Picasso", "Who painted this?", "George Braque", "Piet Mondrian", "Willem de Kooning",
					"Pablo Picasso", "Pablo Picasso", "text about painting");

	var qNine = new qArray("paragraph about Willem de Kooning", "In what year was this painting most likely completed?",
				 "1915", "1945", "1975", "1995", "1945", "text about de Kooning");

	var qTen = new qArray("paragraph about Morris Louis", "Who painted this?", "Morris Louis", "Jackson Pollock", "Mark Rothko", "Jim Dine", "Morris Louis", "text about Louis");

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
    $('#feedbackTxt').text(qArray.txtForFdbck);

    /* console.log(qArray.correctAns); */
}

loadNext(metaArray[qCounter]);
$('#qNumber').text(1);

$('.btn').click(function(){
	userChoice = $(this).text();
		console.log(userChoice);

		if (userChoice === metaArray[qCounter].correctAns) {
			
			score = score +1;
			$('#numberCorrect').text(score);
			$('#feedback').text("That's correct.")
			$("#response").fadeIn(400);

			}

		else {
			$('#feedback').text("That's incorrect.")
			$("#response").fadeIn(400);
		}
	qCounter = qCounter+1;

})

$('#nextQ').click(function() {

	
	
	loadNext(metaArray[qCounter]);
	$('#response').fadeOut(350);
	$('#qNumber').text(qCounter + 1);
})

/*
for (i=qCounter; i < 10; i++) {
	$('.btn').click(function() {
		loadNext(metaArray[i]);
		qCounter = qCounter +1;
    	$('#qNumber').text(qCounter + 1);
  
	});
    }	


*/

/*
			
	$('.btn').click(function() {

		userChoice = $(this).text();
		console.log(userChoice);

		if (userChoice === qOne.correctAns) {
			
			score = score +1;
			$('#numberCorrect').text(score);
			$('.inner-div').hide();
			$('#response').show();
			$('#feedback').text('that is correct.')
			$('#nextQ').click(function() {
				$('#response').hide();
				$('.inner-div').show();

			});

		}

		else {
			$('#mainBox').hide();
			$('#response').show();
			$('#feedback').text('that is incorrect.')
		}

	

});
	


*/


});