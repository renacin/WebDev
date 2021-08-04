// Title: Learning Javascript - Basics: Objects | Garbage Collection
// Date: 01/08/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/garbage-collection


	Garbage Collection:
		+ Put simply, garbage collection (GC) is the process of gaining back memory
		that was being allocated to unused/unnneeded variables/objects

		+ Some languages have their own built in GC algorithms, some don't. JavaScript
		has it's own built in GC methods, but it's still important to understand
		how and why the process works. Even before that, some time should be
		taken to better understand memory allocation. Both processes are part of
		the same problem

	Memory Allocation:
		+ 

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
