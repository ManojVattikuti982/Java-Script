/**
 * Type Conversion 
 * to String..
 * to Number..
 * to Boolean..
 */

// to number
const a = "3";
const b = "10";

console.log(a + b); // String concatenation
console.log(Number(a) + Number(b)); // Addition
console.log(parseInt(a) + parseInt(b)); // Addition with parseInt
console.log(Number("3") + Number(b)); // Addition with Number conversion

console.log("----------------------------------------------------------------------");

const c = Number(a);
const d = Number(b);

console.log(typeof a); // String type before conversion
console.log(typeof b); // String type before conversion
console.log(typeof c); // Number type after conversion
console.log(typeof d); // Number type after conversion

console.log("----------------------------------------------------------------------");


const e = 3;
const f = 10;

const g = String(e);
const h = String(f);

console.log(typeof e); // Number type before conversion
console.log(typeof f); // Number type before conversion 
console.log(typeof g); // String type after conversion
console.log(typeof h); // String type after conversion

console.log("----------------------------------------------------------------------");

// to boolean
const i = "manoj";
const j = 1;
const k = 0;
const l = "";

console.log(Boolean(i)); // true (non-empty string)
console.log(Boolean(j)); // true (non-zero number)  
console.log(Boolean(k)); // false (zero)
console.log(Boolean(l)); // false (empty string)