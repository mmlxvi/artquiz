$(document).ready(function() {

	var questionCounter = 1;
	var correctNum = 0;

	$("#qNumber").text(questionCounter);
	$("#numberCorrect").text(correctNum);

	$("#nextQ").click(function() {
		questionCounter = questionCounter + 1;
		$("#qNumber").text(questionCounter);
	})




	































});