// Title: Learning Javascript - Basics: Data Types | String Methods
// Date: 13/08/2021
// Author: Renacin Matadeen
//
//-----------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/constructor-new

	Methods Of Primitives:
        + JavaScript allows us to work with primitives (strings, numbers, etc.) 
		as if they were objects

		+ Remember there are 7 primitives string, number, bigint, boolean, 
		symbol, null and undefined. Each possess their own set of methods

		+ As a reminder Python also allows methods for its primitives as
		most data types are just classes in of themselves

		Commonly Used String Methods:


			charAt(position):
				+ Returns the character at the specified position
				+ Remember this is just for a character not a word
				
				let str_1 = "Hello world";
				let x = str_1.charAt(0);				// returns "H"


			concat(string_2, string_3, etc...):
				+ Joins specified string literal values
				
				let str_1 = "Hello";
				let str_2 = "world";

				let str_3 = str_1.concat(str_2);		// returns "Hello world"


			indexOf(string):
				+ Returns the index of first occurrence of specified String starting
				from specified number index. Returns -1 if not found.
				+ Remember this is for a word not justa character
				
				let str_1 = "Hello world world";
				let x = str_1.indexOf("world");			// returns 6


			lastIndexOf(string):
				+ Returns the index of first occurrence of specified String starting
				from specified number index. Returns -1 if not found.
				+ Remember this is for a word not justa character
				
				let str_1 = "Hello world world";
				let x = str_1.indexOf("world");			// returns 12


			matchAll(RegExp):
				+ Search a string for a match using specified regular expression
				
				let str_1 = "The rain in SPAIN stays mainly in the plain";
				let x = str_1.matchAll(/.ain/gi);		// returns ["ain", "AIN", "ain", "ain"]

				+ NOTES:
					- regex pattern must be stored within "/" backslashes, and must contain
					a flag

					- /xxx/g means look at all match cases instead of just thee first
					- /xxx/i means search will be case insensitive
					- /xxx/m means perform a multiline search
					- /xxx/x ignore whitespace


			replace(searchValue, replaceValue):
				+ Search specified string value and replace with specified replace
				Value string and return new string. Regular expression can also be used
				as searchValue

				let str_1 = "Hello world world";
				let x = str_1.replace("world", "World");		// returns "Hello World World"
				let x = str_1.replace(/world/gi, "World")


			slice(start_idx, end_idx):
				+ Extracts a section of a string based on specified starting and ending index
				and returns a new string.

				let str_1 = "Hello world world";
				let x = str_1.slice(6, 16);						// returns "world world"


			split(separatorString, limitNumber):
				+ method splits a string into an array of substrings, and returns the new array.
				If an empty string ("") is used as the separator, the string is split between each
				character

				let str_1 = "Hello world world";
				let x = str_1.split(" ");						// returns ["Hello", "World", "World"]


			toLowerCase():
				+ Returns lower case string value.
			
				let str_1 = "Hello world";
				let x = str_1.toLowerCase(0);					// returns "hello world"

			
			toUpperCase():
			+ Returns upper  case string value.
			
			let str_1 = "Hello world";
			let x = str_1.toUpperCase(0);						// returns "HELLO WORLD"


	ADDITIONAL LINKS:
		+ String Methods --> https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property
		+ Date Methods   --> https://www.tutorialsteacher.com/javascript/javascript-date-methods-reference
		+ Array Methods  --> https://www.tutorialsteacher.com/javascript/javascript-array-methods-reference

*/
//-----------------------------------------------------------------------------
// Create a constructor function that acts as a template for students
function Student (name, age, location) {
	this.name = name;
	this.age = age;
	this.location = location;

	this.printInfo = function () {
		console.log(`Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`);
	};
};


//------------------------------------------------------------------------------
// Use Object Constructors
let student_1 = new Student("Renacin", 25, "Toronto");
let student_2 = new Student("Steve", 23, "Brampton");
let student_3 = new Student("Debbie", 30, "Halton");

// Store Students In An Array
let all_students = [student_1, student_2, student_3];
