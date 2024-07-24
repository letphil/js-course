// Given 2 strings, a and b, return a string of the form short+long+short,
// with the shorter string on the outside and the longer string on the inside.
// The strings will not be the same length, but they may be empty ( zero length ).

/**
 *
 * ("1", "22") --> "1221"
 * ("22", "1") --> "1221"
 */

/**
 * ShortLongShort.solution("1", "22"); // returns "1221"
 * ShortLongShort.solution("22", "1"); // returns "1221"
 */

/**
 *
 * @param {string} a
 * @param {string} b
 */
function solution(a, b) {}

// console.log(solution("shay", "phil"));

// // your code here
// // 1. check both parameters are strings
// if (typeof a === "string" && typeof b === "string") {
//   // 2. find length of both strings
//   const aLength = a.length,
//     bLength = b.length;

//   if (aLength === bLength) {
//     console.error("string lengths are the same");
//     return null;
//   }
//   // 3. find which length is longer
//   let longerLength;
//   if (aLength < bLength) longerLength = "b";
//   else longerLength = "a";

//   let returnString;

//   // 4. put shorter string first
//   if (longerLength === "a") {
//     returnString = b + a + b;
//   } else {
//     returnString = a + b + a;
//   }

//   return returnString;
// } else {
//   console.error("both parameters are not strings");
//   return null;
// }
