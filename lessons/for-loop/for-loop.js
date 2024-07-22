/**
 * for loop
 *
 * for loop is used to iterate over a block of code multiple times.
 *
 * for (initialization; condition; increment/decrement) {
 * // block of code to be executed
 * }
 */

// 1. assign a variable to an array of numbers and
// iterate over the array using a for loop and log each number

// 2. assign a variable to an array of strings and
// iterate over the array using a for loop and log each string
const dogNames = ["Lucy", "Baxter", "Jake", "Scout"];

for (let i = 0; i < dogNames.length; i++) {
  console.log(dogNames[i]);
}

// 3. assign a variable to an array of numbers and add them all together
const numbers = [25, 50, 75, 100];
let totalNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  totalNumber = totalNumber + numbers[i];
  console.log(totalNumber);
}
