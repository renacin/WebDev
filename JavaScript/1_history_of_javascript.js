// Title: Learning Javascript - Basics: History Of JavaScript
// Date: 20/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/intro

	History:
		+ During the early development of the world wide web most websites
		were static. Most content was either simple text, or simple images

		+ Seeing the need for greater dynamism, both Netscape and Sun Micro
		Systems teamed up to bring the Java programming language to the
		browser.

		+ Soon after this partnership, Netscape realized that a better option
		was needed; something that was closer in syntax to Java, but still
		operable on the web - like Scheme.

		+ The inital offering was called LimeScript, but the language was soon
		renamed to what we know today; Javascript. As confusing as the name may
		be, it was chosen to give the new language credibility via association.

		+ JavaScript runs in the browser, but can now run on the server, or on
		a device

	Features of JavaScript:
		+ Javascript supports most of the structured programming syntax of the
		C programming language.

		+ Needs semicolons to denote the end of a line, however JavaScript has
		automatic semi colon addition to make programming a bit easier.


	General Notes:
		+ You can run JavaScript in your HTML file; but it's cleaner to have
		it in it's own file

		+ alert();
			This function creates an alert outside of the document to get the users
			attention. Use these sparingly!
*/


//Create a function that will display a greeting message
function welcome_msg(){
    document.getElementById('msg').innerHTML = 'Hello!';
};

// Point Of Confusion, How Does JS Code Run?
welcome_msg();
alert("Script Complete! This is just a test.");





