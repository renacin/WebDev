// Title: Learning Javascript - Basics: Functions
// Date: 26/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/function-basics


	Functions:
		+ Quite often we need to perform a similar set of actions in many places
		of our script. Instead of writing the same blocks of code, ever expanding
		the lines in our file we can make use of functions.
		+ Functions allow us to store a set of instructions under a named object
		and used that named object to be called, ad perform in different areas of
		our script.
		+ We use function declaration to create a custom function
		+ Functions can take default arguements as inputs!

		+ Basic Syntax Of Functions:
		function NAME (inputA = "Default_1", inputB = "Default_2") {
			console.log(inputA);
			console.log(inputB);

			return inputA + inputB;
		};


	CAUTION:
		+ Functions have access to variables outside of their scope, and within
		your code, but your code does not have access to local variables within
		the scope of functions.
		+ Be careful of naming, and using variables between scopes!
		+ Make sure your function names are useful, and informative!!!
		+ Functions should be small, and should accomplish only one task. This makes
		readability, and editability easier!!!
*/

//------------------------------------------------------------------------------
//Create a function that will print the date as a formatted string
function getCurDate() {
	let formattedDate = undefined;
	let currentDate = new Date();

	let cDay = currentDate.getDate();
	let cMonth = currentDate.getMonth() + 1;
	let cYear = currentDate.getFullYear()

	cDay = cDay < 10 ? `0${cDay}`: cDay;
	cMonth = cMonth < 10 ? `0${cMonth}`: cMonth;

	return `${cMonth}-${cDay}-${cYear}`
};


function splitDate(curDate) {

	let d_names = ["Month", "Day", "Year"];
	let d_array = curDate.split("-");

	for (let x in d_array) {
		console.log(`${d_names[x]}: ${d_array[x]}`);
	};
};

//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
let date = getCurDate();
console.log(`Current Date: ${date}`);
splitDate(date);
