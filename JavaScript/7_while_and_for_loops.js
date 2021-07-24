// Title: Learning Javascript - Basics: Loops While & For
// Date: 24/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/while-for

	Loops:
		+ in programming we often need to repeat steps, or iterate through a
		given set of inputs. Instead of manually repeating code for each observation
		we can make use of programming loops.
		+ There are 5 different types of loops in JavaScript:
			- For 			(Loop through a block of code)
			- For/In		(Loop through the properties of an object)
			- For/Of		(Loop through the values of an iterable)

			- While			(Loop through code, while condition is true)
			- Do/While		(Loop through code while specific condition is met)

	While Loop:
		+ Basic syntax of while loop:
		while (condition) {code to execute}
		+ Condition in while loop must be true to continue executing

		let i = 0;
		while (i <= 3) {
			console.log(i)
			i++
		}

		let i = 3;
		while (i) {
			console.log(i);
			i--
		};

		+ The code above stops at 0, because 0 becomes falsy and no longer
		satisfies true condition of while statement

	Do/While Loop:
		+ In some cases it would be helpful to run the encapsulated code
		at least once even if the condition is not met.
		+ In this case the do/while loop can be utilized
		+ Basic syntax of a do/while loop:
			do {execute code} while (conditon)


	CAUTION:
		+ Loops in javascript don't experience fencepost issue like in python!
*/

//------------------------------------------------------------------------------
//Create a function that will loop through an array
function basic_loop(number){

	/*
	// Basic While Loop
	let i = 1;
	while (i <= number) {
		console.log(`Current Iteration: ${i}`);
		i++;
	};
	*/

	// Basic Do/While Loop
	let i = 2;
	do {
		console.log(i);
		i++;
	} while (i < number);
};

//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
basic_loop(5);
