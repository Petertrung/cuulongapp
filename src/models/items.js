const mongoose = require("mongoose");

const itemModel = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  wave_id: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("item", itemModel);