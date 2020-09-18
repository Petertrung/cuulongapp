const mongoose = require("mongoose");
const Restaurants = require("./restaurants");

const userModel = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  animal: {
    type: String,
    require: true
  },
  typeof: {
    type: String,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("items", userModel);
