// Title: Learning Javascript - Basics: Switch-Case
// Date: 25/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/switch

	Switch-Case
		+ Conditional branching can become unwieldy when multiple branches are
		needed. It's hard to maintain, and track more than 5 branches. One way to
		solve this is with switch and case branches
		+ Main benefits of the switch-case methodology is that it can deal with
		variants of similar outputs
		+ Cases can be grouped by stacking them together
		+ The default block acts as a catch all

		+ Basic Syntax:
			switch (input) {
				case "match_1":
					console.log(input)

				case "match_2":
					console.log(input)

				case "match_3":
				case "match_4":
					console.log(input)

				default:
					console.log("No Clue")
			}

	CAUTION:
		+ You need a break statement in your switch-case tree. Need an exit
*/

//------------------------------------------------------------------------------
//Create a function that will loop through an array
function basic_loop(test_score){

	switch (true) {

		// Test Score 0 - 49
		case (+test_score >= 0 && +test_score <= 49):
			console.log(`Grade: F, Score: ${test_score}/100`);
			break;

		// Test Score 50 - 69
		case (+test_score >= 50 && +test_score <= 59):
			console.log(`Grade: D, Score: ${test_score}/100`);
			break;

		// Test Score 60 - 69
		case (+test_score >= 60 && +test_score <= 69):
			console.log(`Grade: C, Score: ${test_score}/100`);
			break;

		// Test Score 70 - 79
		case (+test_score >= 70 && +test_score <= 79):
			console.log(`Grade: B, Score: ${test_score}/100`);
			break;

		// Test Score 80 +
		case (+test_score >= 80):
			console.log(`Grade: F, Score: ${test_score}/100`);
			break;

		// Fall-Back
		case (test_score === "n/a"):
		default:
			console.log("Please Input Valid Test Score!");
			break;

	};
};

//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
let test_score = prompt("Test Score: ", "n/a");
basic_loop(test_score);
