/**
 * While loop
 *
 * while loop is used to iterate over a block of code multiple times
 * as long as a specified condition is true.
 *
 * while (condition) {
 * // block of code to be executed
 * }
 */

// 1. make a variable and compare it with a while loop
// let i = 0;

// while (i < 15) {
//   console.log(i);
//   i+=5;
// }

// 2. make an array of numbers and iterate over the array using a while loop
let numbers = [1, 2, 3, 4, 5];
let i = 0;

while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

let keepGoing = true;

while (keepGoing) {
  console.log("im going");
  if (i > 9) {
    keepGoing = false;
  }
  i++;
}
