// Title: Learning Javascript - Basics: Type Conversions
// Date: 23/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/operators

	Basic Operators:
		+ Like any other programming language, JavaScript supports basic math
		operators; as well as JavaScript specifc operators

		+ Additon:         +
		+ Subtraction:     -
		+ Multiplication:  *
		+ Division:        /
		+ Exponent:        **
		+ Modulus:         %

		

*/

// Create Some Variables | Use let & const
const GRAV_CONST = 6.67 * (10 ** -11);

let earth_mass = 5.97 * (10 ** 24),
	object_mass = 10 * (10 ** 3),
	distance_btw = 6.38 * (10 ** 6),
	grav_force = undefined;


//Create a function that will display a greeting message
function grav_attrac(GRAV_CONST, earth_mass, object_mass, distance_btw){

	// Calculate Force
	grav_force = GRAV_CONST * ((earth_mass * object_mass) / (distance_btw ** 2))

	// Display Information
	console.log(`Earth Mass: ${earth_mass},\nObject Mass: ${object_mass},\nDistance Between: ${distance_btw},\nGravitational Constant: ${GRAV_CONST}`)
	console.log(`Force Of Attraction: ${grav_force}`)
};

// Point Of Confusion, How Does JS Code Run?
grav_attrac(GRAV_CONST, earth_mass, object_mass, distance_btw);
