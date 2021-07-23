// Title: Learning Javascript - Basics: Type Conversions
// Date: 22/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/type-conversions

	String Conversion:
		+ Sometimes we need the string version of a variable for certain tasks
		+ How do we convert numbers, bigints, or booleans
		+ You can convert other datatypes to string with the String function
		+ let value = true
		+ str_val = String(value)

	Numeric Conversion:
		+ Numeric conversion happens in mathematical functions and expressions
		automatically.

		Ex:
			let value = undefined
			value =    "6" / "21"	 | This works
			value =   "21" / 22	     | This also works
			value = "Blah" / 22      | This works, But Returns NaN!
			value =     10 / 0       | This works, But Returns Infinity!

		+ Convert to numeric by using the Number() function
			let age = Number("31")   | This works
			let age = Number("Five") | This does not work!

		+ CAUTION:
			Number(undefined)       --> NaN
			Number(null)            --> 0
			Number(true/false)      --> 1/0
			Number("")              --> 0

	Boolean Conversion:
		+ Like the conversion above, you can convert variables to booleans
		+ Use similar function structure, as previous functions
		+ let completion_stat = Boolean()

		Ex:
			let value = undefined
			value = Boolean(1)

		+ CAUTION:
			Boolean("1")            --> true
			Boolean(0)              --> false
			Boolean("0")            --> true
			Boolean("Blahh")        --> true
			Boolean(" ")            --> true
			Boolean("")             --> false

*/

// Create Some Variables | Use let & const
const FIR_NAME = "Renacin",
	LAS_NAME = "Matadeen";

let age = 25,
	education = false,
	job = undefined;


//Create a function that will display a greeting message
function welcome_msg(){
    console.log(Number(job))
	console.log(Boolean(""))

};

// Point Of Confusion, How Does JS Code Run?
welcome_msg();
