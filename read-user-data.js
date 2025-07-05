/**
 * read data from user
 */

const readlinesync = require("readline-sync");

const userName = readlinesync.question("What is your name? ");
const userAge = readlinesync.questionInt("What is your age? ");
console.log(typeof userAge); // number


console.log(`Hello ${userName}, you are ${userAge} years old.`);

const yearOfBirth = 2025 + userAge;
console.log(`You were born in the year ${yearOfBirth}.`);
