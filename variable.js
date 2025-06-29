/**
 * * lesseon 3
 * var v/s let v/s const
 */

var message = "hello";
 message = "hiii";
var message = "bye";
console.log(message); // Output: bye

let message1 = "hello";
message1 = "hiii";
// let message1 = "bye"; // This will cause an error because 'message1' is already declared with 'let'
console.log(message1); // Output: hiii

const message2 = "hello";   
// message2 = "hiii"; // This will cause an error because 'message2' is a constant
// const message2 = "bye"; // This will also cause an error because 'message2 is already declared with 'const'
console.log(message2); // Output: hello

// Theory:
// var: Function-scoped, allows redeclaration and reassignment. Can be hoisted and may cause unexpected results.
// let: Block-scoped, allows reassignment but not redeclaration in the same scope. Safer than var for most cases.
// const: Block-scoped, does not allow reassignment or redeclaration. Use for values that should not change.




let userName = "manoj";
let userAge; // userAge is declared but not initialized, so it will be undefined
let userHomeAddress;

let age;

let _;

let $="hello";
console.log($); // Output: hello

let number1;

let number_2

console.log(userName); // Output: manoj
console.log(userAge); // Output: undefined

// Additional notes about variables:
// - Variables are containers for storing data values.
// - Variable names must start with a letter, underscore (_), or dollar sign ($) and cannot start with a number.
// - JavaScript is case-sensitive, so 'myVar' and 'myvar' are different variables.
// - Variables declared without a value are initialized with 'undefined'.
// - Use 'let' and 'const' for block-scoped variables in modern JavaScript; avoid 'var' unless needed for legacy code.
// - 'const' variables must be assigned a value at the time of declaration and cannot be reassigned.
// - You can store any data type in a variable: numbers, strings, objects, arrays, etc.
