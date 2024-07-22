/**
 * functions
 *
 * Functions are a way to group code together to perform a specific task.
 *
 * function functionName() {
 * // block of code to be executed
 * }
 */

// 1. create a function that logs "hello world" to the console
function greeting() {
  console.log("Hello World".toLowerCase());
}

// 2. create a function that logs "hello" and "world" to the console
function helloWorld() {
  console.log("hello");
  console.log("world");
}

// const hw = helloWorld();
// console.log("hw =", hw);

// 3. create a function that takes in a name and logs "hello, name" to the console
// const randomNumber = 0;

let randomNumFirstVal;
let randomNumSecondVal;
let randomNumThirdVal;

function randomNumber(l) {
  return Math.floor(Math.random() * l);
}

function createName() {
  const c = "qwrtpsdfghjklzxcvbnm";
  const v = "aeiou";

  randomNumFirstVal = randomNumber(c.length);
  randomNumSecondVal = randomNumber(v.length);
  randomNumThirdVal = randomNumber(c.length);

  return c[randomNumFirstVal] + v[randomNumSecondVal] + c[randomNumThirdVal];
}

console.log("createName =", createName());

/**
 *
 * @param {string} name - person's name
 */

// undefined null false
function nameGreet(name) {
  if (typeof name !== "string") return "please pass name as a string";
  return "hello, " + name;
}

const firstName = createName();
const secondName = createName();
const thirdName = createName();

const namesArr = [firstName, secondName, thirdName];

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(nameGreet(namesArr[i]));
// }

// console.log(nameGreet(hw));
// nameGreet('shay');

// 4. make a function that takes an array of numbers and logs each number to the console
const bulls96 = [6, 23, 33, 13, 91];

function logArr(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logArr(bulls96);
