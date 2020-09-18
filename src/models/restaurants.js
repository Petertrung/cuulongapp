const mongoose = require("mongoose");

const resturantModel = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  cuisine: {
    type: String,
    require: true
  },
  restaurant_id: {
    type: String,
    require: true
  },
  admin: {
    type: String,
    require: true
  },
  close_location: {
    type: String
  },
  status: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("restaurants", resturantModel);
