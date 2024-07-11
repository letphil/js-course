/**
 * Objects and Arrays
 *
 * objects and arrays can hold all kinds of data-types
 *
 * objects are key value pairs
 * arrays are lists of data
 *
 * objects can even hold arrays or other objects
 * arrays can hold objects or other arrays
 */

// const obj = {}; // {}
// const obj2 = new Object(); // {}

// obj.name = "harry";
// obj.age = 19;
// obj.gender = "M";
// obj.name = "steve";
// obj.friends = ["drew", "yondis", "gregory"];

// if (obj.name === "harry") {
//   // block of code for harry
// } else {
//   // block of code for steve
// }
// console.log("obj =", obj);
// console.log(typeof obj);

// obj ->
// {
//   name: 'harry',
//   age: 19,
//   gender: "M",
//   friends: ['drew', 'yonis', 'gregory']
// }

// const arr = [
//   {
//     name: 'phil',
//     age: 35
//   }, {
//     name: "kimberly",
//     age: 29
//   }, {
//     name: 'brian',
//     age: 32
//   }
// ];

// 1. make an object with 3 key value pairs
const team = {
  // location: "Denver",
  // wins: 15,
  // losses: 3,
};

team.location = "Atlanta";
team.wins = 3;
team.loses = 127;

// 2. make an array with 3 items
const nba = ["Clippers", "Spurs", "Knicks"];
// 3. make an object with an array as a value
const sportLeague = {
  teams: ["Clippers", "Spurs", "Knicks"],
};

const Clippers = {
  wins: 42,
  losses: 8,
  rivals: ["Lakers", "Warriors", "Celtics", "Mavericks"],
};

// 4. make an array with objects
const brownie = {
  name: "Brownie",
  isHot: true,
  isCold: false,
  ingredients: ["flour", "coco power", "sugar", "eggs"],
  cookTimeInMin: 45,
};

const spaghetti = {
  name: "spaghetti",
  isHot: true,
  isCold: false,
  ingredients: ["flour", "yolk"],
  cookTimeInMin: 6,
};

const foods = [brownie, spaghetti];
// 5. make an object with an array of objects as a value

const favoriteFoods = {
  items: foods,
};

// favoriteFoods.items = foods

// const carBrands = ['ford', 'bmw', 'toyota']

// const carBrandCars = [
//   ['mustang'],
//   ['3series', '5series', 'ix'],
//   ['corolla', 'camry']
// ]

const carBrands = {
  ford: ["mustang"],
  bmw: ["3series", "5series", "ix"],
  toyta: ["corolla", "camry"],
};

carBrands.ford;
