// Title: Learning Javascript - Basics: Fundementals
// Date: 21/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/intro

	General Notes:
		+ Statements are usually written on seperate lines, ended with a semicolon
		+ Comments can be added with two //
		+ Multiline Comments with /* and *

	Defining Variables:
		+ Defining variables is core to all programming languages, no different
		in JavaScript
		+ Use multiline with commas if grouping needed
		+ You can define similar themed variables in one line; but lacks readability
		+ DO NOT DECLARE VARIABLES TWICE; Will Result In An Error!

		Using 'let' keyword:
			+ To create a variable before usage you must use the 'let' keyword
			in previous version the keyword 'var' was used

		Using 'const' keyword:
			+ When a programmer needs an immutable variable they can make use of
			the 'const' keyword. This creates a variable that cannot be changed!
			+ Use all caps when defining constants as it will help differentiate
			keywords, if a variable is a constant but not known until after runtime
			use lowercase!

	Variable Data Types:
		+ 
*/

// Create Some Variables | Use let & const
const FIR_NAME = "Renacin",
	SEC_NAME = "Matadeen";

let age = 25,
	car = "Toyota Corolla",
	city = "Brampton";


//Create a function that will display a greeting message
function welcome_msg(){
    console.log("Hello my name is, " + FIR_NAME + " " + SEC_NAME);
	console.log("I am currently " + age + " and currenlty drive a " + car)
	console.log("I live in tge city of " + city)
};

// Point Of Confusion, How Does JS Code Run?
welcome_msg();
