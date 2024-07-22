/**
 * Exercise:
 *  return the day of the week based on how many hours
 *  a week has 24 * 7 = 168 hours
 * if the hours are less than 24 return "Sunday"
 * if the hours are less than 48 return "Monday"
 * if the hours are less than 72 return "Tuesday"
 * if the hours are less than 96 return "Wednesday"
 * if the hours are less than 120 return "Thursday"
 * if the hours are less than 144 return "Friday"
 * if the hours are less than 168 return "Saturday"
 * if the hours are more than 168 return "Invalid"
 */

// const currentHour = 100;

// switch (true) {
//   case currentHour < 24:
//     console.log("SUNDAY");
//     break;
// }

/**
 * given  price of a product
 * return the discount based on the price
 * in switch case
 * if the price is less than 100 return discounted price 10%
 * if the price is less than 200 return discounted price 20%
 * if the price is less than 300 return discounted price 30%
 * if the price is less than 400 return discounted price 40%
 * if the price is less than 500 return discounted price 50%
 * if the price is 500 or more than 500 return discounted price 60%
 * if the price is more than 1000 return discounted price 70%
 *
 */

// const price = 1000;

// switch (true) {
// }

// in an array of prices return the discounted prices as an array
// const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// const price = 200;
const discounts = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7];
const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
// let finalPrice;

// const purchasePrice = [];

// var, const, let, function

function discountPriceGenerator(price) {
  let finalPrice;
  switch (true) {
    case price < 100:
      finalPrice = price - price * discounts[0];
      break;

    case price < 200:
      finalPrice = price - price * discounts[1];
      break;

    case price < 300:
      finalPrice = price - price * discounts[2];
      break;

    case price < 400:
      finalPrice = price - price * discounts[3];
      break;

    case price < 500:
      finalPrice = price - price * discounts[4];
      break;

    case price >= 500 && price < 1000:
      finalPrice = price - price * discounts[5];
      break;

    case price >= 1000:
      finalPrice = price - price * discounts[6];
      break;
  }

  return finalPrice;
}

// let discountedPrices = [];

console.log("prices =", prices);

for (let i = 0; i < prices.length; i++) {
  console.log("prices[i] =", prices[i]);
  const discountedPrice = discountPriceGenerator(prices[i]);
  prices[i] = discountedPrice;
}

console.log("prices =", prices);

const fullPrice = [99, 87, 115];
const afterDiscountPrice = [];

// switch (true) {
//   case price < 100:
//     finalPrice = price - price * discounts[0];
//     // let discount10 = price * discount[0];
//     // let finalPrice10 = price - discount10;

//     // prices.push(finalPrice10);
//     // console.log(prices);
//     break;

//   case price < 200:
//     finalPrice = price - price * discounts[1];
//     // let discount20 = price * discount[1];
//     // let finalPrice20 = price - discount20;
//     // prices.push(finalPrice20);
//     // console.log(prices);
//     break;

//   case price < 300:
//     finalPrice = price - price * discounts[2];
//     // let discount30 = price * discount[2];
//     // let finalPrice30 = price - discount30;
//     // prices.push(finalPrice30);
//     // console.log(prices);
//     break;

//   case price < 400:
//     finalPrice = price - price * discounts[3];
//     // let discount40 = price * discount[3];
//     // let finalPrice40 = price - discount40;
//     // prices.push(finalPrice40);
//     // console.log(prices);
//     break;

//   case price < 500:
//     finalPrice = price - price * discounts[4];
//     // let discount50 = price * discount[4];
//     // let finalPrice50 = price - discount50;
//     // prices.push(finalPrice50);
//     // console.log(prices);
//     break;

//   case price > 500 && price < 1000:
//     finalPrice = price - price * discounts[5];

//     // finalPrice = price * discount[5];
//     // let finalPrice60 = price - discount60;
//     // prices.push(finalPrice60);
//     // console.log("prices =", prices);
//     break;

//   case price > 1000:
//     finalPrice = price - price * discounts[6];
//     // let discount70 = price * discount[6];
//     // let finalPrice70 = price - discount70;
//     // prices.push(finalPrice70);
//     // console.log(prices);
//     // return;
//     break;
// }

// console.log("finalPrice =", finalPrice);
