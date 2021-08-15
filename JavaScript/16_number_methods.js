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

		Commonly Used Number Methods:

			.toString():
				+ Returns value as a string
				
				let num_1 = 35;
				let x = num_1.toString();				// returns "35"


			.toExponential():
				+ Returns a string, with a number rounded and written using exponential
                notation. A parameter defines the number of characters behind the
                decimal point:
				
				let num_1 = 35;
				let x = num_1.toExponential(5);			// returns "3.50000e+1"


			.toFixed():
				+ Returns a string, with the number written with a specified number
                of decimals.
                + Takes a number representing the number of decimal points 
				
				let num_1 = 35.03243403;
				let x = num_1.toFixed(4);				// returns "35.0324"

                + Use .toFixed(0) to round up or down to the nearest integer.


			.toPrecision():
				+ Returns a string, with the number written with a specified number
                of lenght.
                + Takes a number repreesenting total number of lenght
				
				let num_1 = 35.03243403;
				let x = num_1.toPrecision(4);			// returns "35.03"

                + Use .toPrecision rounds up oor down number!!
                + .toPrecision(0) rounds to highest     // returns "40"


        Number Global Methods:

            Number():
                + Converts a string into a number


            parseInt():
                + Parses the first observation of a number within a string input

                let str_1 = "1293234@test.com";
				let x = parseInt(str_1);			    // returns "1293234"


            parseFloat():
                + Parses the first observation of a number within a string input

                let str_1 = "1293234.232 Value Of";
				let x = parseFloat(str_1);			    // returns "1293234.232"



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

