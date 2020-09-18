const mongoose = require("mongoose");
const Restaurants = require("./restaurants");

const userModel = mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  tenant: {
    type: String,
    require: true
  },
  restaurant_id: {
    type: String
  },
  status: {
    type: String
  },
  resturant: {
    Restaurants
  }
});

module.exports = mongoose.model("users", userModel);
