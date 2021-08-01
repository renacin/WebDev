// Title: Learning Javascript - Basics: Objects
// Date: 01/08/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/object-copy


	Object References:
		+ One of the fundamental differences of objects versus primitives is that
		objects are stored and copied “by reference”, whereas primitive values:
		strings, numbers, booleans, etc – are always copied “as a whole value”.

		+ Variables stored in an object store not only the variable, but it's
		address in memory as well

		+ This is important because when an object variable is copied, the
		reference is copied, but the object itself is not duplicated. Any changes
		made to the copy will result in changes to the original

		+ In other words:

			let message_1 = "Hello";
			message_2 = message_1;

			Here we have two independent variables that have the same value

			let user = {name: 'John'};
			let admin = user;
			admin.name = 'Pete';
			console.log(user.name); || 'Pete'

			When the duplicate is changed so is the original


	CAUTION:
		+


*/


//------------------------------------------------------------------------------

//Create a basic function
function function_1() {
	console.log("Hello");
};


//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
function_1();
