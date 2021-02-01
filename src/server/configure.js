const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const postRoute = require("../router/post");
const stripeRoute = require("../router/stripe");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(cors());
  app.use("/api", postRoute);
  app.use("/stripes", stripeRoute)
};

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);
