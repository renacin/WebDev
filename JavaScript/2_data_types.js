// Title: Learning Javascript - Basics: Fundementals
// Date: 21/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/types#objects-and-symbols

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
		+ Every variable has a certain type
		+ In JavaScript there are 8 data types:
			- Arrays
				+ Similar to python lists
				+ let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

			- Number
				+ Represents integers, floats, infinity, and NaN
				+ No special rep, just numbers in console

			- BigInt
				+ For numbers larger than 9007199254740991, or smaller than -9007199254740991
				we can make use of BigInts
				+ To define a BigInt add an "n" at the end of your very larger interger

			- String
				+ Basic character representation. Use double quotes outside of characters to
				define string
				+ String formatting!
					- Just like Python, JavaScript allows you to use string formatting
					- Inside your backticks add the ${var} decorator around text

			- Boolean
				+ Covers true false logic
				+ Can be the result of statement, or defined for a variable
				+ Cover more in boolean logic section

			- "Null"
				+ is a value in of itself, represents nothing
				+ use only for unknown variable

			- "Undefined"
				+ like the null variable undefined represents nothing
				+ however unlike the null value, the undefined value is used more
				as a placeholder, rather than an empty, or unknown value

			- Object
				+ All other objects and variables store a single type of data.
				the object data type is unique as it can store a collection of
				unique/complex entities
				+ Are very similar to python's dictionary datatypes
				+ Defined using the {} construct

*/

// Create Some Variables | Use let & const
const FIR_NAME = "Renacin",
	LAS_NAME = "Matadeen";

let age = 25,
	car = "Mazda3Sport",
	city = "Brampton",
	job = undefined;

let car_1 = {
	name: "Mazda3",
	price: 12000.00,
	horspower: 130,
	weight: 1800
};

let car_2 = {
	name: "BRZ",
	price: 15000.00,
	horspower: 180,
	weight: 1500
};

//Create a function that will display a greeting message
function welcome_msg(){
    console.log(`Hello my name is, ${FIR_NAME} ${LAS_NAME}`);
	console.log(`I am currently ${age} and currenlty drive a ${car}`)
	console.log(`I live in the city of ${city}, and work @${job}`)
	console.log(car_2)
};

// Point Of Confusion, How Does JS Code Run?
welcome_msg();
