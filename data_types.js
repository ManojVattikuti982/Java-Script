/**
 * Data types
 */

/** string */
let userName = "manoj";
console.log(typeof userName); // Output: string

/** Number */
let userAge = 25.5;
console.log(typeof userAge); // Output: number

/** Boolean  --> true/false ---> yes/no */
let isProductInCart = true;
console.log(typeof isProductInCart); // Output: boolean
//if product is in cart then true else false

/** Undefined */
let userHomeAddress;
console.log(typeof userHomeAddress); // Output: undefined
// userHomeAddress is declared but not initialized, so it will be undefined

/** Null */
let noValue = null;
console.log(typeof noValue); // Output: object
// null is a special value that represents the intentional absence of any object value
// Note: typeof null returns "object" due to a historical bug in JavaScript

/**Object */
const personDetails = {name: "manoj", age:25, education: "MCA"};
console.log(typeof personDetails); // Output: object

const arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(typeof arrayOfNumbers); // Output: object
// In JavaScript, arrays are also objects. They are a special type of object used for storing ordered collections of values.

/** Symbol */
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol
// Symbol is a unique and immutable primitive value, often used as object property keys

/** BigInt */
let largeNumber = BigInt(1234567890123456789012345678901234567890);
console.log(typeof largeNumber); // Output: bigint
// BigInt is used for integers larger than the safe integer limit in JavaScript (2^53 - 1)

/** Object */
let user = {
    name: "manoj",
    age: 25,
    isActive: true
};
console.log(typeof user); // Output: object
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type 