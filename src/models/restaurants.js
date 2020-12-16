const mongoose = require("mongoose");
//const orders = require("./orders")

const resturantModel = mongoose.Schema({
  name: {
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
  },
  address:{
    addressLine1: {
      type: String
    },
    addressLine2: {
      type: String
    },
    city: {
      type: String
    },
    postalCode: {
      type: String
    },
    provinceCode: {
      type: String
    }
  } ,
});

module.exports = mongoose.model("restaurants", resturantModel);
