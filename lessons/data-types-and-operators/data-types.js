/**
 * there are 3 main data types we will work with
 * string, number, boolean
 *
 * fun fact:
 * 0 is false in javascript
 * 1 is true
 *
 * typeof is a great tool to find out what data-type you are working with
 * it comes in handy in if else statements that we will learn later
 */

// string
console.log("typeof =", typeof "hello");

// number
console.log("typeof =", typeof 17);

// boolean
console.log("typeof =", typeof true);

// 1. make a variable using var that is a string
var a = "that time";
// 2. make a variable using const that is a number
const b = 45;

// 3. make a variable using let that is a boolean
let c = true;
// 4. reassign above variable into the opposite
c = false;

console.log(a, b, c);

console.log(typeof a, typeof b, typeof c);
