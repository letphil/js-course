/**
 * Switch case
 *
 * The switch statement is used to perform different actions based on different conditions.
 */

// 1. make a variable and compare it with a switch statement

const team = "raiders";

switch (team) {
  case "broncos":
    console.log("Broncos got whoopt by the Raiders");
    break;
  case "raiders":
    console.log("Raiders are the best NFL football team");
    break;
}

// 2. make a variable and compare it with a switch statement that has a default case

const lakers = "lebron";

switch (lakers) {
  case "magic":
    console.log("lakers player is magic");
    break;
  default:
    console.log("lakers did not catch in case, player is =", lakers);
    break;
}

// 3. make a variable and compare it with a switch statement that has multiple cases
const game = "ultima online";

let favoriteGame = undefined;

switch (game) {
  case "ultima online":
    console.log("Ultima online is the Game");
    favoriteGame = "ultima online";
    break;
  case "Undertale":
    console.log("Undertale is your game");
    favoriteGame = "Undertale";
    break;
  default:
    console.log("Didnt find, your current game is = " + game);
    favoriteGame = game;
    break;
}

console.log("favoriteGame =", favoriteGame);
