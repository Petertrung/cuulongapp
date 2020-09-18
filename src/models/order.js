const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  restaurant_id: {
    type: String,
    require: true
  },
  orderer: {
    type: String,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  items: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("order", orderModel);
