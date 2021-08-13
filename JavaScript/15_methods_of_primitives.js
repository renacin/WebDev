// Title: Learning Javascript - Basics: Data Types | Methods Of Primitives
// Date: 13/08/2021
// Author: Renacin Matadeen
//
//-----------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/constructor-new

	Methods Of Primitives:
        +

	CAUTION:
		+

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
