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
 *
 * please read:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const obj = {
  a: 0,
  b: true,
  c: "see",
};

// 1. make an object with 3 key value pairs

const team = {
  mascot: "bear",
  wins: 15,
  losses: 1,
  travel: false,
};

const AGE_TYPES = ["ADULT_MALE", "ADULT_FEMALE", "KIDS"];

const shoeOptions = {
  "jfdj-jkldajf-23232-jladjfa": {
    options: [
      {
        _id: "111-1280382-12121",
        name: "black",
        rgb: "0, 0, 0",
      },
      {
        _id: "kl;ajdf;jafja",
        name: "red",
        rgb: "255, 0 , 0",
      },
    ],
  },
};
//  const red = {
//     rgb:
//  };

const shoe = {
  _id: "jfdj-jkldajf-23232-jladjfa",
  colors: ["111-1280382-12121", "kl;ajdf;jafja", "brown"],
  sizes: [250, 255, 260, 265],
  gender: "M",
  age: AGE_TYPES[0],
  brand: "Nike",
  price: 100000,
  quantity: 100,
  discount: 0.3,
  seasonDiscounts: [
    {
      season: "summer",
      rate: 0.4,
    },
    {
      season: "winter",
      rate: 0.7,
    },
  ],
};

// 2. make an array with 3 items
const vegtabales = ["carrot", "brocolli", "bokChoy"];

// 3. make an object with an array as a value
const basketball = {
  size: ["mens", "kids", "womans"],
};
// 4. make an array with objects as values
// name(string), price(number), watts(number)
const computerParts = [
  {
    name: "RAM",
    price: 10,
    watts: 0.4,
  },
  {
    name: "SSD",
    price: 25,
    watts: 1.5,
  },
  {
    name: "Hardrive",
    price: 150,
    watts: 1.3,
  },
];
// 5. make an object with an array of objects as a value

// 1. make an Object
// 2. make value with array of objects
// [{obj1},{obj2},{obj3}]
//computer parts // inventory // price
const computerPartsStore = {
  inventory: computerParts,
  address: "123 Oak Seoul",
  phone: "0109991234",
  manager: "Steve",
  employees: [
    {
      name: "Mark",
      phone: "5558989",
      age: 40,
    },
    {
      name: "Tom",
      phone: "5557979",
      age: 32,
    },
    {
      name: "Travis",
      phone: "5553232",
      age: 43,
    },
  ],
};

console.log("computerPartsStore =", computerPartsStore);

console.log(
  "Object.keys(computerPartsStore) =",
  Object.keys(computerPartsStore)
);

console.log(
  "Object.values(computerPartsStore) =",
  Object.values(computerPartsStore)
);

console.log(
  "Object.entries(computerPartsStore) =",
  Object.entries(computerPartsStore)
);

const j = Object.entries(computerPartsStore);

// for (let i = 0; i < j.length; i++) {
//   console.log("key =", j[i][0]);
//   console.log("value =", JSON.stringify(j[i][1]));
// }
