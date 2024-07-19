// console.log("Does this work");
// const itDoes = "Yes";

// const age = [37, 40, 18];
const gender = ["male", "female"];
const dDriver = [true, false];

const mammaBear = {
  name: "Mamma Bear",
  age: 37,
  dDriver: true,
  drink: "Lemon Drop",
};

const daddyBear = {
  name: "Daddy Bear",
  age: 40,
  dDriver: false,
  drink: "Appletini",
};

const babyBear = {
  name: "Babby Bear",
  age: 18,
  dDriver: true,
  drink: "Root Beer",
};

const patrons = [mammaBear, daddyBear, babyBear];

console.log("mammaBear age =", mammaBear.age);
console.log("daddyBear dDriver =", daddyBear.dDriver);
console.log("babyBear drink =", babyBear.drink);

console.log("partons[0] =", patrons[0]);

// Homework - Round One

// Scenerio
console.log(patrons[0].name, "enters the Bar");
console.log("Bartender checks ID");

if (patrons[0].age > 21) {
  console.log("Alright, what can I get you to drink?");
} else {
  console.log("Sorry, you need to leave.");
}

if (patrons[2].age > 21) {
  console.log("Come In");
} else if (patrons[1].age > 21) {
  console.log("Dad, will drive home");
} else {
  console.log("Get out!");
}
// Homework - Round Two

console.log(patrons[0].name, "enters the Bar");
console.log("Bartender checks ID");
if (patrons[0].age > 21) {
  console.log("Alright, what can I get you to drink?");
  if (patrons[0].drink === "Lemon Drop") {
    console.log(patrons[0].drink, "please, and thank you");
  } else {
    console.log("I'm not sure, give me a minute");
  }
} else {
  console.log("Sorry, you need to leave.");
}
// Homework - Round Three (Insert Text)
// _____ Greeting _____//
console.log(patrons[1].name, "enters the Bar");
console.log("Weclome back " + patrons[1].name + " !");

if (patrons[1].age >= 21) {
  console.log("Checks ID, going to have the usual?");
}

if (patrons[1].dDriver == false) {
  console.log(patrons[1].drink + " please, and make it a double");
}

if (patrons[1].dDriver == true) {
  console.log("No thanks, I'm driving tonight");
} else {
  console.log("Oh, looks like you're a little young to be drinking here");
}

// 1. greeting
console.log(patrons[1].name, "enters the bar");
console.log("Wecloem back " + patrons[1].name);

if (patrons.age >= 21) {
  // is ok to drink
  if (patrons[1].dDriver) {
    console.log("No thanks, I'm driving tonight");
  } else {
    console.log(patrons[1].drink + " please, and make it a double");
  }
} else {
  console.log("Oh, looks like you're a little young to be drinking here");
}
