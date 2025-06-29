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
