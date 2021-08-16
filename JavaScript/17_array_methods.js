// Title: Learning Javascript - Basics: Data Types | Number Methods
// Date: 15/08/2021
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


		Commonly Used Array Methods:

			.join(Join String Element)
            + Joins array elements into a string. Can provide a join string to
            be placed in between objects

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let str_1 = fruits.join("_");

            // returns "Banana_Orange_Apple_Mango"


			.pop()
            + Removes the last element from the list, and returns it as a output

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let str_1 = fruits.pop();

            // returns "Mango"


			.push(Value To Add)
            + Adds a primitive to the end of the list, and returns the total lenght
            of the array to the user 

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let new_lenght = fruits.push("Cherry");

            // returns 5 




	ADDITIONAL LINKS:
		+ String Methods --> https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property
		+ Date Methods   --> https://www.tutorialsteacher.com/javascript/javascript-date-methods-reference
		+ Array Methods  --> https://www.tutorialsteacher.com/javascript/javascript-array-methods-reference
        + Number Methods --> https://daks.me/js_number_methods.php 

*/
//-----------------------------------------------------------------------------
// Create a constructor function that acts as a template for students


//------------------------------------------------------------------------------
// Use Object Constructors