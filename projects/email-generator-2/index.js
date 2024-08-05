// 1. import express
const express = require("express");
// 2. import path that will help with pathing for files
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = 8888;

// GET request
app.get("/ping", function (req, res) {
  res.send("hello shay");
});

app.listen(PORT, function () {
  console.log("server running on port =", PORT);
});
