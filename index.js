const express = require("express");
const https = require("https");
const fs = require("fs");
const port = 3000;

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://user:cuulong@cluster0.r3bzs.azure.mongodb.net/sample_resturants?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
const app = express();

app.use(express.static("src"));

app.get("/", (req, res) => {
  res.send("We online");
});

app.listen(port, () => {
  console.log("Server is running on Port " + port);
});
// var server = https.createServer(options, app);
