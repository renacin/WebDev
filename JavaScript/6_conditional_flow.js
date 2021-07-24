// Title: Learning Javascript - Basics: Conditional Flow
// Date: 23/07/2021
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

	If Branching:
		+ If a condition is met, the contained code is executed, if it isn't the
		encapsulated code block is disregarded and code continues
		+ Code is executed if the condition is true

		+ if (condition) {execute code}

	CAUTION:
		+ Can add additional functionality within conditions, make use of:
			- && (And)
			- || (Or)
			- !  (Not)
*/

//------------------------------------------------------------------------------
//Create a function that will display a greeting message
function greeting_msg(currentDate){

	// What Time Is It?
	let cur_time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	let cur_hour = currentDate.getHours()

	// Greeting Between | 00:00 & 11:00 | 12:00 & 17:00 | 18:00 & 24:00
	if (cur_hour >= 0 && cur_hour <= 11){
		console.log(`Good Morning: ${cur_time}`)

	} else if (cur_hour >= 12 && cur_hour <= 17) {
		console.log(`Good Afternoon: ${cur_time}`)

	} else if (cur_hour >= 18 && cur_hour <= 24) {
		console.log(`Good Evening: ${cur_time}`)

	} else {
		console.log(`No fucking clue what time it is`)

	}

};

//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
let currentDate = new Date()
greeting_msg(currentDate);