const express = require("express");
const https = require("https");
const fs = require("fs");
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

//server
const app = express();

//serve files
app.use(express.static("src"));
app.use(bodyParser.json());

//set server
app.get("/", (req, res) => {
  res.send("We online");
});

//Import Routes
const postRoute = require("./src/routes/posts");
app.use("/api", postRoute);

//console message
app.listen(port, () => {
  console.log("Server is running on Port " + port);
});
// var server = https.createServer(options, app);
