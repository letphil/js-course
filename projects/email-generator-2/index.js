require("dotenv").config();

// 1. import express
const express = require("express");
// 2. import path that will help with pathing for files
const path = require("path");
// import firebaseApp
const firebaseApp = require("./firebase");
console.log("firebaseApp =", firebaseApp);

const authRouter = require("./routes/auth");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app routes
app.use("/auth", authRouter);

const PORT = 8888;

// GET request
app.get("/ping", function (req, res) {
  res.send("hello shay");
});

app.listen(PORT, function () {
  console.log("server running on port =", PORT);
});
