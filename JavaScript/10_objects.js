// Title: Learning Javascript - Basics: Objects
// Date: 27/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/function-basics


	Objects:
		+ In JavaScript primitive data types contain only one type of variable.
		+ Objects, break that norm by allowing users to stored key-collections of
		varing data types.
		+ Objects are very similar to classes in python. Instances of objects can
		have properties, as well as methods!


	CAUTION:
		+ The concept of classes was introduced in JavaScript in ES6 (ECMA2015).
		However, the concept of true classes does not exist in JavaScript.
		Use objects as a bridge!
		+ Javascript has built in objects, like date, and math
*/

//------------------------------------------------------------------------------
//Create a function that will print the date as a formatted string
function crawlEmpProp(emp) {
	console.log(`Employee Name: ${emp.firstname}`);
};

//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
let emp_1 = {
	firstname: "Bob",
	lastname: "Ross",
	email: "big_boss@gmail.com",

	department: "Engineering",
	salary: 50000
};

let emp_2 = {
	firstname: "David",
	lastname: "Smith",
	email: "dsmith@gmail.com",

	department: "Management",
	salary: 80000
};

let emp_list = [emp_1, emp_2];
for (let i = 0; i < emp_list.length; i++){
	crawlEmpProp(emp_list[i]);
};
