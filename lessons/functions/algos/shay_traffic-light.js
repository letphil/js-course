let currentLight = "yellow";

function updateLight(current) {
  switch (current) {
    case "red":
      console.log("green");
      break;
    case "yellow":
      console.log("red");
      break;
    case "green":
      console.log("yellow");
  }
}

updateLight("green");
