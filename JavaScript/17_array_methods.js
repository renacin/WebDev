// Title: Learning Javascript - Basics: Data Types | Number Methods
// Date: 15/08/2021
// Author: Renacin Matadeen
//
//-----------------------------------------------------------------------------
/*
   !-- Notes --!
   Following: https://javascript.info/constructor-new

	Methods Of Primitives:
        + JavaScript allows us to work with primitives (strings, numbers, etc.) 
		as if they were objects

		+ Remember there are 7 primitives string, number, bigint, boolean, 
		symbol, null and undefined. Each possess their own set of methods

		+ As a reminder Python also allows methods for its primitives as
		most data types are just classes in of themselves


        //---------------------------------------------------------------------
		Commonly Used Array Methods:

			.join(Join String Element)
            + Joins array elements into a string. Can provide a join string to
            be placed in between objects

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let str_1 = fruits.join("_");

            // returns "Banana_Orange_Apple_Mango"


			.pop()
            + Removes the last element from the list, and returns it as a output

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let str_1 = fruits.pop();

            // returns "Mango"


            .shift()
            + Removes the first element from the list, and returns it as a output

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let str_1 = fruits.shift();

            // returns "Banana"


			.push(Value To Add)
            + Adds a primitive to the end of the list, and returns the total lenght
            of the array to the user 

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let new_lenght = fruits.push("Cherry");

            // returns 5


            .unshift(Value To Add)
            + Adds a primitive to the begining of the list, and returns the total lenght
            of the array to the user 

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let new_lenght = fruits.unshift("Cherry");

            // returns 5



        //---------------------------------------------------------------------
        Manually Changing Elements:

            List Indexing
            + You can manually change an entry within a list by setting its index in the list
            to your desired value

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits[0] = "Kiwi"      // New list ["Kiwi", "Orange", "Apple", "Mango"]

            Use the lenght of an array as an index to easily add values to the end of an array

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits[fruits.lenght] = "Kiwi"      // New list ["Kiwi", "Orange", "Apple", "Mango"]



        //---------------------------------------------------------------------
        Deleting Array Items:
            
            Since arrays are objects in Javascript you can use the builtin delete keyword in
            your code to delete certain elements within an array.

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            delete fruits[0]        // [undefined, "Orange", "Apple", "Mango"];

            However in using the delete keyword an undefined placeholder replaces the element that
            you removed. In order to prevent holes in your arrays use the pop, or shift methods
            within Javascript

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits.shift();         // ["Orange", "Apple", "Mango"];



        //---------------------------------------------------------------------
        Splicing An Array
            
            There are cases where one would want to add objects at different places in an array.
            The splicing method gives users the ability to do such a thing.
            Note that the splicing method takes 3 parametres, and splice returns an array with the
            deleted elements.

            .splice(Where to insert values, how many values to remove, the elements to add to the array)
            
            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits.splice(1, 0, Tomato, Starfruit);                        // ["Banana", "Tomato", "Starfruit", "Orange", "Apple", "Mango"];

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let del_items = fruits.splice(0, 1);                           // ["Orange", "Apple", "Mango"] returns "Banana"

            let fruits = ["Banana", "Orange", "Apple", "Mango"];
            let del_items = fruits.splice(0, (fruits.lenght - 1));         // ["Orange", "Apple", "Mango"] returns "Banana"


        //---------------------------------------------------------------------
        Concatinating Arrays

            Javascript also provides an easy way to combine arrays useing the .concat method.

            .concat(array to join)
            
            let fruits_1 = ["Banana", "Orange"];
            let fruits_2 = ["Apple", "Mango"];
            fruits_1.concat(fruits_2);                        // ["Banana", "Orange", "Apple", "Mango"];

            Note:
            concat() can take as many arrays as you need to join. Additionally it can take a single entry to join to an array.



        //---------------------------------------------------------------------
        Slicing An Array

            Like Python, Javascript allows you to create subsets of an array. In this case however you don't use
            list indexing, rather an array method with defined parametres.

            .slice(begin, end)
            let fruits = ["Banana", "Orange", "Lemon" "Apple", "Mango"];
            let citrus = fruits.slice(1, 2);                  // ["Orange" "Lemon"];

            Note:
            slice() can take one or two arguements. In the case of a single arguement you want just one value based on the index
            value provide. In case of two, then you want all elements between the first parametre, and second. 


        //---------------------------------------------------------------------
        Sorting Arrays With Non-Numeric Values

            In languages like Python, arrays have builtin methods that make sorting easy. Javascript unfortunately does not
            have builtins like this. 

            .sort()
            This builtin method can only be used on string inputs. And will sort values in an array based on alphabetical
            order. Take no arguements, inplace is always true. But for readability make new variable named sorted.

            let fruits = ["Banana", "Orange", "Lemon" "Apple", "Mango"];
            let sorted_fruits = fruits.sort();                // ["Apple", "Banana", "Lemon", "Mango", "Orange"];

            .reverse()
            Simply returns your list but with each element in it's reverse index. Takes no arguements, and inplace is
            always true.

            let fruits = ["Banana", "Orange", "Lemon" "Apple", "Mango"];
            let sorted_fruits = fruits.sort();                // ["Apple", "Banana", "Lemon", "Mango", "Orange"];
            let r_sorted_fruits = fruits.reverse();                // ["Orange", "Mango", "Lemon", "Banana", "Apple"];



        //---------------------------------------------------------------------
        Sorting Arrays With Numeric Values

            As mentioned before JavaScript does not provide a builtin way for users to sort an array. Instead users must be
            creative and make use of additional JavaScript functionality to get the usability that they desire.

            One method to achieve this is a compare function within the sort method.
            Here you can see that we still make use of the sort function but inside we define a function that takes two
            parametres.

            let points = [40, 100, 1, 5, 25, 10];
            let sorted_points = points.sort(function(a, b){return a - b});

            The compare function should return a negative, zero, or positive value, depending on the arguments:
            When the sort() function compares two values, it sends the values to the compare function, and sorts the values 
            according to the returned (negative, zero, positive) value.
            If the result is negative a is sorted before b.
            If the result is positive b is sorted before a.
            If the result is 0 no changes are done with the sort order of the two values.

            The compare function is just the main logic. The sort() method is the main point of iteration

            An easier way:

            let points = [40, 100, 1, 5, 25, 10];
            let min_points = Math.min.apply(null, points);

            let points = [40, 100, 1, 5, 25, 10];
            let max_points = Math.max.apply(null, points);

            Note:
            Grab the highest & lowest value by using array indexing. array[0] = lowest, array[array.lenght - 1] = highest


	ADDITIONAL LINKS:
		+ String Methods --> https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property
		+ Date Methods   --> https://www.tutorialsteacher.com/javascript/javascript-date-methods-reference
		+ Array Methods  --> https://www.tutorialsteacher.com/javascript/javascript-array-methods-reference
        + Number Methods --> https://daks.me/js_number_methods.php 

*/
//-----------------------------------------------------------------------------
// Create a constructor function that acts as a template for students


//------------------------------------------------------------------------------
// Use Object Constructors