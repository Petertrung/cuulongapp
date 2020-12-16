const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
  invoice_id: {
    type: String,
    require: true
  },
  restaurant_id: {
    type: String,
    require: true
  },
  user_id: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("order", orderModel);
