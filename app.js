$(document).ready(function() {

	var qCounter = 0;
	var score = 0;
	var userChoice;



function qArray(information, question, choice1, choice2, choice3, choice4, correctAns, txtForFdbck, painting){
    this.information = information;
    this.question = question;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice4 = choice4;
    this.correctAns = correctAns;
    this.txtForFdbck = txtForFdbck;
    this.painting = painting;
}

	var imageLibrary = ['images/08132012_EDU_app_raushenberg_main.jpg', 'images/albasbreakfast.jpg', 'images/nightcreatures.jpg',
						 'images/Rivera-the-arsenal.jpg', 'images/white-center.jpg', 'images/124Good-byeA2008.jpg', 'images/number-1-lavender-mist.jpg',
						 'images/Reading_The_Letter_Picasso_1921_small.jpg', 'images/dekooningpinkangels.jpg', 'images/point-of-tranquility-1960.jpg']


	var qOne = new qArray("This American artist rose to fame in the 1950s, during the period between Abstract Expressionism and Pop Art. In 1983, he won a Grammy Award for his album design of the Talking Heads album Speaking in Tongues.", 
							"Who painted this?", "Jasper Johns", "Cy Twombly", "Gerhard Richter",
							"Robert Rauschenberg", "Robert Rauschenberg", "This silkscreen painting, Retroactive I, was created by Rauschenberg in the summer of 1963, a few months before Kennedy's assassination.", "08132012_EDU_app_raushenberg_main.jpg");

	var qTwo = new qArray("This piece, titled 'Bananas', was one in a series of collaborative paintings by Andy Warhol and this neo-expressionist painter who first gained notoriety for his graffiti in the Lower East Side of Manhattan.", "Who is the other painter?", 
				"Philip Guston", "David Salle", "Jean-Michel Basquiat", "Francesco Clemente", "Jean-Michel Basquiat", "Basquiat and Warhol completed this painting in 1985. Both painters died within three years of its completion.", "bananas.jpg");

	var qThree = new qArray("She was an influential American abstract expressionist painter in the second half of the 20th century, as was her husband, who was the more famous of the two. The work seen here, Night Creatures, was completed in 1965.", "Who painted this?", "Helen Frankenthaler",
				 "Lee Krasner", "Georgia O'Keeffe", "Frida Kahlo", "Lee Krasner", "One of Lee Krasner's teachers once remarked that her work was 'so good you would not know it was painted by a woman.'", 'nightcreatures.jpg');

	var qFour = new qArray("This Mexican painter was portrayed by Rubén Blades in the 1999 film Cradle Will Rock, and by Alfred Molina in Julie Taymor's Frida Kahlo biopic in 2002. The painter was most famous for his murals, which prominently featured socialist themes and aspects of Mexican culture.", "Who is the painter?",
				"José Chávez Morado", "Salvador Corona", "Fernando Leal", "Diego Rivera", "Diego Rivera", "This image is a detail from Diego Rivera's 1928 mural, The Arsenal. The central figure of the painting is Frida Kahlo, Rivera's wife.", 'Rivera-the-arsenal.jpg');

	var qFive = new qArray("Mark Rothko was an Abstract Expressionist painter whose signature works are large-scale paintings of  emotionally evocative colored rectangles. In 1964, he was commissioned to create a meditative space filled with his paintings. Rothko committed suicide in 1970 and did not live to see the chapel completed.", "The Rothko Chapel is located in what American city?",
				  "Houston", "San Francisco", "Baltimore", "New Haven", "Houston", "Composer Morton Feldman wrote a piece inspired by his visit to the chapel in Houston, TX.", 'white-center.jpg');

	var qSix = new qArray("This American painter was born in 1952. He studied at CalArts and rose to fame in New York in the 1980s. His paintings often juxtapose seemingly unrelated images appropriated from popular culture and art history. In 1995 he directed the feature film Search and Destroy, which starred Christopher Walken and Dennis Hopper.", "Who painted this?", "Julian Schnabel", "Jeff Koons",
				"Andy Warhol", "David Salle", "David Salle", "This painting, 'Goodbye A.', was completed by David Salle in 2008.", '124Good-byeA2008.jpg');

	var qSeven = new qArray("Jackson Pollock's early work was influenced by muralists like Diego Rivera as well as aspects of Surrealism. But Pollock is most remembered for his large 'drip-paintings' like the one seen here.", "How did Jackson Pollock die?", "in a car accident",
				   "he drowned", "in a plane crash", "heart attack", "in a car accident", "Pollock died at the age of 44 in an alcohol-related single-car accident.", "number-1-lavender-mist.jpg");

	var	qEight = new qArray("This prolific Spanish painter is known for co-founding the Cubist movement. The painting shown here, La Lecture de la Lettre (Reading the Letter), was created circa 1921 during his transition from Cubism to Classicism.", "Who painted this?", "George Braque", "Piet Mondrian", "Willem de Kooning",
					"Pablo Picasso", "Pablo Picasso", "This painting was found in Picasso's studio after his death.", 'Reading_The_Letter_Picasso_1921_small.jpg');

	var qNine = new qArray("Willem de Kooning (1904 – 1997) was a Dutch American abstract expressionist. The work shown here, 'Pink Angels', is the final painting in his first series devoted to images of women.", "In what year was this painting most likely completed?",
				 "1935", "1945", "1955", "1965", "1945", "'Pink Angels' was completed circa 1945.", 'dekooningpinkangels.jpg');

	var qTen = new qArray("This painter's work, which provides a link between Abstract Expressionism and Color Field painting, is characterized by layered rainbows of acrylic paint poured down huge blank canvases.", "Who painted this?", "Morris Louis", "Jackson Pollock", "Mark Rothko", "Jim Dine", "Morris Louis", "Morris Louis created this painting circa 1959.", 'point-of-tranquility-1960.jpg');

var metaArray = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen];

var paintingArray = ['#painting0', '#painting1', '#painting2', '#painting3', '#painting4', '#painting5', '#painting6', '#painting7', '#painting8', '#painting9'];


function loadNext(qArray){
	$(paintingArray[qCounter - 1]).hide();
    $('#info').text(qArray.information);
    $('#question').text(qArray.question);
    $('#button1').text(qArray.choice1);
    $('#button2').text(qArray.choice2);
    $('#button3').text(qArray.choice3);
    $('#button4').text(qArray.choice4);
    $('#qNumber').text(questionCounter);
    $('#numberCorrect').text(score);
    
    $(paintingArray[qCounter]).show();
    

    //$("#pictureFrame").append('<img src="images/' + metaArray[qCounter].painting +'">');
    //$('#picture').show("fast", function () {
    //	$(this).attr('src', qArray.painting);
	//};

}


loadNext(metaArray[qCounter]);
$('#qNumber').text(1);

$('.btn').click(function(){
	$('#feedbackTxt').text(metaArray[qCounter].txtForFdbck);
	userChoice = $(this).text();
		console.log(userChoice);

	if (qCounter < 9) {

		if (userChoice === metaArray[qCounter].correctAns) {
			
			score = score +1;
			$('#numberCorrect').text(score);
			$('#feedback').text("That's correct.");
			$("#response").fadeIn(400);

			}

		else {
			$('#feedback').text("That's incorrect.")
			$("#response").fadeIn(400);
		}

		qCounter = qCounter+1;
		
	}

	else {

		if (userChoice === metaArray[qCounter].correctAns) {
			
			score = score +1;
			$('#numberCorrect').text(score);
			$('#feedback').text("That's correct.");
			//$('#feedback').text("Your score: " + score * 10 + "%");
			$('#finalScore').text("Your score: " +  (score * 10) + "%");
			$('#finalScore').show();
			$("#response").fadeIn(400);
			$('#nextQ').hide();

			}

		else {
			//$('#feedback').text("Your score: " + score * 10 + "%");
			$('#feedback').text("That's incorrect.")
			$('#finalScore').text("Your score: " +  (score * 10) + "%");
			$('#finalScore').show();
			$('#nextQ').hide();
			$("#response").fadeIn(400);
			
		}
		
		
		//$('#playAgain').show();
	}

	

})

$('#nextQ').click(function() {

	
	loadNext(metaArray[qCounter]);
	$('#response').fadeOut(350);
	$('#qNumber').text(qCounter + 1);
	


})

$('#playAgain').click(function() {

	score=0;
	qCounter=0;
	loadNext(metaArray[0]);
	$('#response').fadeOut(350);
	$('#qNumber').text(1);
	('#painting9').hide();
	$('#playAgain').hide();
	$('#nextQ').show();


})

});