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
  user_metadata: {},
  resturant: []
});

module.exports = mongoose.model("users", userModel);
