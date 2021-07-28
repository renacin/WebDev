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

	Object Constructors:
		+ Instead of manually creating ojects via the object definition method,
		one can first create a Object Constructor template, and fill in data using
		that very template.

		+ Remember, in addition to properties, objects can also have methods attached
		to them

		Basic Syntax:
		function Template(var1, var2, var3){

			// These are the objects properties
			this.var1 = var1;
			this.var2 = var2;
			this.var3 = var3;

			// These are the methods attached to the objects

		};


	CAUTION:
		+ The concept of classes was introduced in JavaScript in ES6 (ECMA2015).
		However, the concept of true classes does not exist in JavaScript.
		Use objects as a bridge!
		+ Javascript has built in objects, like date, and math
*/

//------------------------------------------------------------------------------

// Create a template that will act as an Object Constructor for User objects
function User(firstname, lastname, email, department, salary, perform, years_worked) {

	// Object Properties
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;

	this.department = department;
	this.salary = salary;
	this.perform = perform;
	this.years_worked = years_worked;
};

// Object Methods
User.prototype.fullname = function() {
	return `${this.firstname} ${this.lastname}`;
};

User.prototype.calcBonus = function() {
	let bonus = +this.salary * (+this.perform * (0.025 * (+this.years_worked/35)));
	let rounded_bonus = Math.round(bonus)
	return `${rounded_bonus}`;
};


//Create a function that will print the date as a formatted string
function displayEmpInfo(emp) {
	console.log(`Full Name: ${emp.fullname()}, Current Salary: $${emp.salary}, Yearly Bonus: $${emp.calcBonus()}`);
};


//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
const emp_1 = new User("Bob", "Ross", "bross@gmail.com", "Mechanical", 50000, 0.90, 20);
const emp_2 = new User("David", "Smith", "dsmith@gmail.com", "IT", 80000, 0.70, 8);
const emp_3 = new User("Barbara", "Kane", "bkane@gmail.com", "Management", 100000, 0.50, 10);

let emp_list = new Array(emp_1, emp_2, emp_3);

// Loop through all employees in array
for (let i = 0; i < emp_list.length; i++){
	displayEmpInfo(emp_list[i]);
};
