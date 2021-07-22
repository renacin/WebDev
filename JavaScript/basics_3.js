// Title: Learning Javascript - Basics: Interactions
// Date: 22/07/2021
// Author: Renacin Matadeen
//
//------------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/alert-prompt-confirm

	General Notes:
		+ There are a number of ways to interact with the broswer. Either through
		the high/low level APIs, the console, alerts, or by sending information
		to an html element.

	Alerts:
		+ Shows a message outside of the document window in a modal window
		+ Everytime the alert function is called a new alert window is rendered,
		note that the user must clear the previous alert windows before viewing
		subsequent messages
		+ Users cannot interact with the original document when an alert is viewed
		+ alert("Text")

	Prompt:
		+ Like the alert window, the prompt function makes use of the modal window
		to display certain text information. In this case it also accepts inputs
		+ let username = prompt("Username: ", "Default Value")

	Confirm:
		+ Is yet another modal window that pulls attention to a specific purpose
		in this case you provide the user with a question, and two option, Yes,
		or Cancel.
		+ Defined the same way prompt is utilized, however the resultant variable
		is a boolean
		+ let user_ans = confirm("Question?")

*/

// Create Some Variables | Use let & const
const FIR_NAME = "Renacin",
	LAS_NAME = "Matadeen";

let age = 25,
	car = "Mazda3Sport",
	city = "Brampton",
	job = undefined;

//Create a function that will display a greeting message
function welcome_msg(){
    alert(`Welcome!`)
	let username = prompt("Username: ", undefined)
	let user_ans = confirm("Exit Page?")
	console.log(`Inputed Username: ${username}, User Answer: ${user_ans}`)
};

// Point Of Confusion, How Does JS Code Run?
welcome_msg();
