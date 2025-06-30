/** 
 * concatenation
 * template literal/strings
 */


let userName = "manoj";
let userAge = 25;

//my name is manoj and my age is 25
let message = "my name is " + userName + " and my age is " + userAge;
console.log(message); // Output: my name is manoj and my age is 25

// Using template literals (ES6 feature)
let messageTemplate = `my name is ${userName} and my age is ${userAge}`;
console.log(messageTemplate); // Output: my name is manoj and my age is 25  
// Template literals allow for easier string interpolation and multi-line strings
// They are enclosed in backticks (`) and use ${} for variable interpolation

// Example of multi-line string using template literals
let multiLineMessage = `Hello, my name is ${userName}.
I am ${userAge} years old.
Nice to meet you!`;
console.log(multiLineMessage);
// Output:
// Hello, my name is manoj.
// I am 25 years old.
// Nice to meet you!
// Template literals can also include expressions
let sumMessage = `The sum of 5 and 10 is ${5 + 10}`;
console.log(sumMessage); // Output: The sum of 5 and 10 is 15
// Template literals are a powerful feature in modern JavaScript, making string manipulation more readable and maintainable.
// Note: Template literals are supported in ES6 and later versions of JavaScript. Ensure your environment supports them.