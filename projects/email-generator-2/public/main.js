console.log("Welcome to Email Generator");

// Basic Info
const cacName = document.getElementById("cacName");
const clientName = document.getElementById("clientName");
const instructor = document.getElementById("instructor");
const timeName = document.getElementById("timeName");
const instructorNameEmail = document.getElementById("instructorNameEmail");

// Repeated Info from Basic

// ----- <> - SUBJECT: Your session with "instructor"...
const instructorNameSub = document.getElementById("instructorNameSub");

// ----- <> - BODY: Dear "clientName"...
const clientNameEmail = document.getElementById("clientNameEmail");

// ----- <> - <> - This is "cacName"...
const cacNameEmail = document.getElementById("cacNameEmail");

// ----- <> - <> -  scheduled for today at "timeName".
const timeNameEmail = document.getElementById("timeNameEmail");

// ----- <> - <> - LINKS: for Instructor
const linkBox = document.getElementById("linkBox");
const zoomLink = document.createElement("a");

function sendNames() {
  //Grab Values from Basic Info
  let cacNameSender = cacName.value;
  let clientNameSender = clientName.value;
  let instructorSender = instructor.value;
  let timeNameSender = timeName.value;

  function makeBold(str) {
    return `<b>${str}</b>`;
  }

  //Input value into Subject of email
  instructorNameSub.innerHTML = `<b>${instructorSender}</b>`;

  // Input those values inside body of email.
  cacNameEmail.innerHTML = makeBold(cacNameSender);
  clientNameEmail.innerHTML = makeBold(clientNameSender);
  timeNameEmail.innerHTML = makeBold(timeNameSender);
  instructorNameEmail.innerHTML = makeBold(instructorSender);

  //Insert "if statement" so Link will generate based on instructor selection
  if (instructorSender === "Phil") {
    zoomLink.href = "https://www.w3schools.com/";
    zoomLink.innerHTML = "Phil's Link";
    linkBox.appendChild(zoomLink);
    console.log("Instructor selected =", instructorSender);
  } else if (instructorSender === "Ted") {
    zoomLink.href = "https://www.w3schools.com/";
    zoomLink.innerHTML = "Ted's Link";
    linkBox.appendChild(zoomLink);
    console.log("Instructor selected =", instructorSender);
  } else if (instructorSender === "Cindy") {
    zoomLink.href = "https://www.w3schools.com/";
    zoomLink.innerHTML = "Cindy's Link";
    linkBox.appendChild(zoomLink);
    console.log("Instructor selected =", instructorSender);
  }
}
