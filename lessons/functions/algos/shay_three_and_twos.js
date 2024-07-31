console.log("Welcome to Five and Two!");

/**
Given an array with exactly 5 strings "a", "b" or "c" 

check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
 */
let array = ["a", "a", "a", "b", "b"];
var totalA = 0;
var totalB = 0;
var totalC = 0;
var keepGoing = false;

function checkThreeAndTwo(array) {
  countArray(array);
  checkThree();
  checkTwo();
}

checkThreeAndTwo(["a", "a", "a", "b", "b"]); // true

// -- -- <> -- Counts Array

function countArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      totalA += array[i];
    } else if (array[i] === "b") {
      totalB += array[i];
    } else if (array[i] === "c") {
      totalC += array[i];
    } else {
      console.log("Error");
    }
  }
}

// -- -- <> Checks for Three of a Kind
function checkThree() {
  if (totalA === "0aaa" || totalB === "0bbb" || totalC === "0ccc") {
    console.log("True");
  } else {
    console.log("False");
  }
}

// -- -- <> Checks for Two of a Kind
function checkTwo() {
  if (totalA === "0aa" || totalB === "0bb" || totalC === "0cc") {
    console.log("True");
  } else {
    console.log("False");
  }
}
