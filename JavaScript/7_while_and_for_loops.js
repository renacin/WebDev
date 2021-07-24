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
		+ The code above stops at 0, because 0 becomes falsy and no longer
		satisfies true condition of while statement

	Do/While Loop:
		+ In some cases it would be helpful to run the encapsulated code
		at least once even if the condition is not met.
		+ In this case the do/while loop can be utilized
		+ Basic syntax of a do/while loop:
			do {execute code} while (conditon)

	For Loop:
		+ The while loop iterates based on the truth of a condition. If the condition
		is always met the loop will never close
		+ A for loop is similar, but it gives the user the ability to choose the
		begining, conditions, and how the loop iterates
		+ Basic syntax of a for loop:
			for (begin; condition; step) {
				code to execute if condition is met
			}
		+ Observe the following for loop:
			for (let i = 0; i <= 10; i++) {}
		+ The variable i is defined within the loop, however you can use a variable
		that has been previously defined.
		+ When using variables that have been previously defined BE CAREFUL! One
		can easily loose track of what's happening, and where errors might have
		occured. if anything stick to seperate variables stricly for iteration.

	Breaking Loops:
		+ Loops can be broken prematurely by calling the break keyword. Once called,
		code will exit the defined loop and continue to execute remaining code

		+ Breaking Multiple Loops:
			- In the case where you have multiple nested loops, have nested break
			statements can be a pain to navigate and ensure proper functionality.
			- To over come this you can make use of the loop label functionality
			within JavaScript.
			Ex:
				main_loop: for (let i = 0; i <= 10; i++) {
							break main_loop;
							}

	Continuing Loops:
		+ If a programmer wants to perform secondary code at a certain iteration
		but want to continue after that code is complete, they can make use of the
		continue keyword


	CAUTION:
		+ Loops in javascript don't experience fencepost issue like in python!
		+ Remember "=" doesnt equal "=="
		+ BE CAREFUL HOW YOU USE LABELED BREAK STATEMENTS!!!
			ONLY USE IF REALLY NEEDED!
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

	/*
	// Basic Do/While Loop
	let i = 2;
	do {
		console.log(i);
		i++;
	} while (i < number);
	*/

	/*
	// Basic For Loop | Begin at 0, Iterate By 1, End If I Equal To 10
	for (let i = 0; i <= number; i++) {
		console.log(`For Loop Iteration: ${i}`);

		if (i == 4) {
			console.log(`Reached Iterable ${i}`);
			break;
		};
	};
	*/

	// Basic Labeled For Loop With continue intergration
	main_loop: for (let i = 0; i <= number; i++) {

		// If number is even, skip
		if (i % 2 == 0) {
			continue;
		};

		// Break Point For Main Loop
		if (i == 9) {
			console.log("Going To Break Main Loop");
			break main_loop;
		};

		// Else Print Number
		console.log(`Unever Number: ${i}`);

	};
};

//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
basic_loop(10);
