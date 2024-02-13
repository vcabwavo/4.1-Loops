//! Loops
//! For Loop
/* 
    Takes 3 parameters
        1. Initial expression
        2. Condition to evaluate
        3. Increment expression

?   Structure:
        keyword(initial; condition; increment) {
            code block to run when condition evaluated is true
        }
*/



//?   Quick Challenges
/* 
        Using a for loop:
    1)  Count to 20 by 2's.
        print (console log) the results within the code block.
    
    2)  Count from 10 to 0, going down by 1.
        print (console log) the results within the code block.
    
    3)  Count from 0, going down by 2's to -24
        print (console log) the results within the code block.
        
    4)  Create a variable called "name" and initialize a value of your choice (i.e. "John", "Sue", etc).
        Go through a name and display each letter individually
        - Either google how you can cycle through a string with JavaScript or utilize the provided resource link within the ReadMe.md of this repo.
*/

//! For In Loop
/* 
    - Great for iterating over values in an object.
    - For In loops iterate over an objects enumerable properties.
*/

let student = {
    name: 'Peter',
    awesome: true,
    degree: "JavaScript",
    week: 3
}

//? Quick Challenge
/* 
    - Write a for in loop that capitalizes the first letter of a name, and lowercase the rest of the name.
        - Use the provided variable "personName".
        - hint: You will need to create a variable that you will need to update via the loop.
*/

let personName = 'michAEL';

//! For Of Loop
/* 
    - Iterate over the values of an iterable object.
        - iterable means that it is able to parse through with numbers.
    - Will not work on an object data type as the keys are not indexed.
    - Will work with arrays because of an index within it.
*/

let newStudent = {
    name: 'Susan',
    awesome: true
}


let cats = ['tabby','british shorthair','burmese','maine coon','rag doll'];