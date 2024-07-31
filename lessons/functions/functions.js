// /**
//  * functions
//    https://developer.mozilla.org/en-US/docs/Glossary/Scope
//  *
//  * Functions are a way to group code together to perform a specific task.
//  *
//  * function functionName() {
//  * // block of code to be executed
//  * }
//  */

// write a function called `greet` that takes a name as an argument and returns a greeting message
let name = "";

const names = ["mark", "tom", "travis"];

/**
 *
 * @param {string} name - name of person
 * @returns "Hello {name}"
 */
// function greet(name) {
//   function capitalizeName(n) {
//     return n[0].toUpperCase() + n.slice(1);
//   }

//   const capitalizedName = capitalizeName(name);

//   return "Hello " + capitalizedName;
// }

// for (let i = 0; i < names.length; i++) {
//   names[i] = greet(names[i]);
// }

// console.log(names);
// write a function that takes 2 numbers as arguments and returns the sum of those numbers

// function addTwo(num1, num2) {
//   return num1 + num2;
// }

// const sums = [addTwo(1, 2), addTwo(3, 4), addTwo(5, 6)];

// for (let i = 0; i < sums.length; i++) {
//   console.log(sums[i]);
// }

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// make function that takes 3 parameters and adds the first 2 in array and subtracts the last
// make new array with values from function from above with passing 'arr' as parameter

let testArr = [[1, 2, 3]];

// function calc(a, b, c) {
//   // code here ->
// }
//Loop array,
//Loop array of index[0] ~ i
//Inner Loop index[0] + index [1] - index [2]

// function loop, save the values of index

function sumThenMinus(a, b, c) {
  return a + b - c;
}

function firstLoop(array) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    // 1. [1, 2, 3]
    console.log(i, " = ", arr[i]);
    const currentArrayWithinArray = arr[i]; // [1, 2, 3]
    returnArr.push(sumThenMinus(arr[i][0], arr[i][1], arr[i][2]));
  }

  return returnArr;
}

console.log(firstLoop(arr));

console.log(arr[0][0]);
