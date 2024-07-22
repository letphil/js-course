// /**
//  *
//  * Write a function which calculates the average of the numbers in a given list.
//  * Note: Empty arrays should return 0.
//  *
//  */

const nums = [6, 23, 33, 13, 91, 23];
const nums2 = [32131, 4325432532, 23523423432, 12312321, 4654654754];

/**
 *
 * @param {Array} arr - array of numbers
 * @returns {Number} -> avg of numbers in arr
 *
 */
function avg(arr) {
  // return (
  //   arr.reduce(function (acc, curr) {
  //     return (curr += acc);
  //   }, 0) / arr.length
  // );

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

// console.log("avg =", avg(nums));

function median(arr) {
  // 1. sort array
  arr = arr.sort((a, b) => a - b);

  let val;

  if (arr.length % 2) {
    // 2. if odd get middle number
    // handle odd
    const midNum = Math.floor(arr.length / 2);
    val = arr[midNum];
  } else {
    // 3. if even get 2 middles numbers and sum and divide by 2
    // handle even
    const midNums = [arr.length / 2 - 1, arr.length / 2];
    const sum = arr[midNums[0]] + arr[midNums[1]];
    val = sum / 2;
  }
  // 4. return value
  return val;
}

console.log(median(nums));

// const bulls96 = [9, 23, 13, 33, 91];
// let bullsTotal = 0;

// for (let i = 0; i < bulls96.length; i++) {
//   //What is the Bulls total?
//   console.log("bullsTotal =", bullsTotal); // 0, 0
//   //Add Array of bull96[i] + the bullsTotal
//   bullsAvgBuilder = bulls96[i] + bullsTotal; // 9, 23
//   bullsTotal = bullsAvgBuilder;

//   //Log it!
//   console.log("bullsAvgBuilder = ", bullsAvgBuilder); // 9, 23
//   console.log("bullsTotal = ", bullsTotal); // 0
//   console.log(bullsAvgBuilder); // 9
// }

// var avg = bullsAvgBuilder / bulls96.length;
// console.log(avg);
