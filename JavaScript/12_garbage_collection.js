// Title: Learning Javascript - Basics: Objects | Garbage Collection
// Date: 01/08/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/garbage-collection


	Garbage Collection:
		+ Garbage collection (GC) is the process of gaining back memory
		that was being allocated to unused/unnneeded variables/objects

		+ Some languages have their own built in GC algorithms, some don't. JavaScript
		has it's own built in GC methods, but it's still important to understand
		how and why the process works. Even before that, some time should be
		taken to better understand memory allocation. Both processes are part of
		the same problem

	Code Reachability
		+ In JavaScript GC is done automatically; and depends on "reachability".
		Reachable variables are those that can be easily accessed, they are
		always stored in memory.
			Ex: (Root Reachable Variables):
				- A function and it's local variables / parametres
				- Global variables
				- Internal variables

		+ Look at the following syntax:

		Ex - 1:
			let user = {name: "John"};

			- User is a global variable
			- Within the user object is a property under the variable name

		Ex - 2:
			let user = null;

			- Here the user object is written over with a new value. The reference
			to the original object, and the properties within it are lost.
			- The property name, and it's value "John" are unreachable; but are
			stored in memory. The automatic GC script in JavaScript will run and
			remove unreachable objects

		Ex - 3:

			let user = {name: "John"};
			let admin = user;
			let user = null;

			- In this case GC does not run as the original user variable is still
			referenced by the admin variable.
			- In order for the original user variable to become unreachable the
			reference stored within the admin variable must

	Code Reachability: interlinked Objects
		+ More complex objects require a bit more thought



	CAUTION:
		+ Garbage collection helps users write code quicker, more efficiently, and
		helps prevent memory leaks. However it is a process that runs in the background,
		constantly checking your code. Code with automatic GC will run slower
		than code without automatic GC.

*/


//------------------------------------------------------------------------------

//Create a basic function
function function_1() {
	console.log("Hello");
};


//------------------------------------------------------------------------------

// Does JavaScript Have An Entry Point?
function_1();
