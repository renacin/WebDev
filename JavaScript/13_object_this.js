// Title: Learning Javascript - Basics: Objects | This
// Date: 10/08/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/object-methods


	Using "This" With Objects
		+ Remember you can create objects as single instances, or you can make use 
		of templates with object constructors. In this case we will be focusing on
		single instances of objects.

		+ Objects store complex sets of information, and are in many cases used to
		represent real world entities like, orders, shopping carts, etc...

		+ In addition to properties that help dscribe the object, an object can
		have methods that give it the ability to do things. In other words a 
		shopping list can have a method that clears all tasks, or charges ones
		credit card when someone is ready to make a purchase.
		
		BASIC SYNTAX:
			+ Create an instance of an object
			Once an instance has been created, make an attached method
			Here we used function expression and attached it to a object
			property named person_1.sendGreetings

		let person_1 = {
			name: "Renacin",
			age: 25,
			location: "Toronto",
		};


		person_1.sendGreetings = function () {
			console.log("Hello");
		};


	Method Shorthand
		+ We just learned how to create methods, and link functions to objects
		before we move on however we must cover the shorthand notation that makes
		method creation much quicker and easier

		BASIC SYNTAX:
			+ Store everything within the single instance of the object
			+ Since everything is stored within the object instance make reference
			to the object, and them the variable with "this.property"
			+ Don't add a semicolon at the end of the function as it ends the object early


		let person_1 = {
			name: "Renacin",
			age: 25,
			location: "Toronto",

			sendGreetings () {
				console.log(`Hey my name is ${this.name});
			}
		};

	CAUTION:
		+ You can assign predeeclared functions to objects, 
		just create the linked method name (object.method_name) and equate
		it to the function that was already declared


*/


//------------------------------------------------------------------------------

// Create a basic function that shows the movement of a character on a
// cartesian plane

let character = {
	name: "Renacin",
	x_loc: 0,
	y_loc: 0,
	num_steps: 0,

	moveLeft () {
		this.x_loc--;
		this.num_steps ++;
		console.log(`${this.name} moved left. Current location [X: ${this.x_loc}, Y: ${this.y_loc}, Steps: ${this.num_steps}]`);
	},

	moveRight () {
		this.x_loc++;
		this.num_steps ++;
		console.log(`${this.name} moved Right. Current location [X: ${this.x_loc}, Y: ${this.y_loc}, Steps: ${this.num_steps}]`);
	},

	moveUp () {
		this.y_loc++;
		this.num_steps ++;
		console.log(`${this.name} moved Up. Current location [X: ${this.x_loc}, Y: ${this.y_loc}, Steps: ${this.num_steps}]`);
	},

	moveDown () {
		this.y_loc--;
		this.num_steps ++;
		console.log(`${this.name} moved Down. Current location [X: ${this.x_loc}, Y: ${this.y_loc}, Steps: ${this.num_steps}]`);
	},
};



//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
character.moveDown();
character.moveDown();
character.moveLeft();
character.moveDown();
character.moveRight();
character.moveDown();
character.moveUp();
character.moveDown();
