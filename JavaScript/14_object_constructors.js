// Title: Learning Javascript - Basics: Objects | Constructors
// Date: 11/08/2021
// Author: Renacin Matadeen
//
//-----------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/constructor-new


	Object Constuctors:
        + The ability to create objects is extremely useful to programmers, and
		it provides additional layers of flexibility in regards to different
		datatypes that might be stored.

		+ However, sometimes a programmer needs to create multiple objects that have
		similar properties and methods. It would be ill advised to create thousands
		of orders, or shopping lists by hand. it would be easier and more efficient
		to make use of a template, or pre-defined class.

		+ Object-Constructors give programmers the ability to implement that exact
		functionality into their code

		+ Defining a constructor function is similar to defining a regular function
		in javascript

		BASIC SYNTAX:
			function Student (name, age, location) {
				this.name = name;
				this.age = age;
				this.location = location;
			};

		+ Once you have defined your constructor function you can create a new instance
		of your template object by using the "new" keyword with a unique name for that
		new instance

		BASIC SYNTAX:
			let student_1 = new Student("Renacin", 25, "Toronto");


	CAUTION:
		+ You can ommit parentheses when defining a constructor function if the
		function doesn't take any parametres


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

// Loop through all students & print basic stats
