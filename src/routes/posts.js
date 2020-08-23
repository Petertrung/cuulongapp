const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurants");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    res.json(restaurants);
  } catch (err) {
    res.json({ message: err })
  }
});

router.post("/", async (req, res) => {
  const restaurants = new Restaurants({
    name: req.body.name,
    cuisine: req.body.cuisine,
    restaurant_id: req.body.restaurant_id,
    admin: req.body.admin
  });
  try {
    const savedPost = await restaurants.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
