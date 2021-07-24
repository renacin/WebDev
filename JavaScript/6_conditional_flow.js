// Title: Learning Javascript - Basics: Conditional Flow
// Date: 24/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/operators


	Conditonal Flow:
		+ All events follow some flow of logic. If this than that; if that
		then this. Programming takes this proceding and scales it to encompass a
		wide range of inputs and outputs all.
		+ Programmers use conditional branching to dictate the flow of logic within
		their code.


	Branching:
		+ if (){}
			- If clause is met, the contained code is executed, if it isn't the
			encapsulated code block is disregarded and code continues
			- Code is executed if the condition is true. Note, Booleans can take the
			place of contional statements. Code will always run if true or 1 is in
			place of condition
			Ex:
				+ if (condition) {execute code}

		+ else if () {}
			- When additional clauses are needed a programmer can make use of the
			else if conditional branch.
			- This provides similar functipnality to the if statement
			Ex:
				+ else if (condition) {execute code}

		+ else {}
			- Else clause is met when if, and else if clauses are not met. Can be
			seen as the fall back statement.
			- In this clause, no condition is stated.
			Ex:
				+ else {execute code}


	Conditional "?" Operator:
		+ The content of a variable can also be decided at initialization.
		+ With the use of the conditional operator a programmer can add branching
		statements within the definition of a variable

		+ let result = condition ? value1: value2;
		+ Set the result, either value1, or value2 based on the execution of the
		condition

		Ex:
		BEFORE
			let access_allowed;
			let age = prompt("How old are you?", "");

			if (age >= 18) {
				access_allowed = true;
			}else {
				access_allowed = false;
			}
			alert(access_allowed)

		AFTER
			let age = prompt("How old are you?", "");
			let access_allowed = (age >= 18) true: false;
			let access_allowed = age >= 18


	Multiple Conditional "?" Operators:
		+ When you need to define a variable at initialization with multiple
		conditons you can also use the ? operator

		Ex:
			let age = prompt("How old are you?", 18)
			let welcome_msg = (age <= 3) ? "You are a baby":
				(age <= 18) ? "You are a Teenager":
				(age <= 100) ? "You are an Adult":
				"I have no clue what age that is";

	CAUTION:
		+ Can add additional functionality within conditions, make use of:
			- && (And)
			- || (Or)
			- !  (Not)

		+ Conditions can have multiple statements, but all must be stored within
		the first set of parentheses

		Ex:
			- if (condition_1 && condition_2 || condition_3) {execute code}
*/

//------------------------------------------------------------------------------
//Create a function that will display a greeting message
function greeting_msg(currentDate){

	// What Time Is It?
	let cur_time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	let cur_hour = currentDate.getHours()

	// Greeting Between | 00:00 & 11:00 | 12:00 & 17:00 | 18:00 & 24:00
	// Much clearner than if, elseif, else blocks
	let greeting = (cur_hour >= 0 && cur_hour <= 11) ? "Good Morning":
		(cur_hour >= 12 && cur_hour <= 17) ? "Good Afternoon":
		(cur_hour >= 18 && cur_hour <= 24) ? "Good Evening":
		"I have no clue what time it is";

	console.log(`${greeting}, it is currently ${cur_time}`)
};

//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
let currentDate = new Date()
greeting_msg(currentDate);
