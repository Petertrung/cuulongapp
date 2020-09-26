const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurants");
const Orders = require("../models/order");

//api test
router.get("/", async (req, res) => {
  try {
    res.send("hello world");
  } catch (err) {
    res.json({ message: err });
  }
});

//Get all restaurants
router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    res.json(restaurants);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit resturant
router.post("/restaurants", async (req, res) => {
  const restaurants = new Restaurants({
    name: req.body.name,
    cuisine: req.body.cuisine,
    restaurant_id: req.body.restaurant_id,
    admin: req.body.admin,
    close_location: req.body.close_location,
    status: req.body.status
  });
  try {
    const savedPost = await restaurants.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific Resturant
router.get("/restaurants/:restId", async (req, res) => {
  try {
    const rest = await Restaurants.findById(req.params.restId);
    res.json(rest);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Resturant

router.delete("/restaurants/:restId", async (req, res) => {
  try {
    const removeResturant = await Restaurants.deleteOne({
      _id: req.params.restId
    });
    res.json(removeResturant);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update
router.patch("/restaurants/:restId", async (req, res) => {
  try {
    const updateResturant = await Restaurants.updateOne(
      { _id: req.params.restId },
      {
        $set: {
          name: req.body.name,
          cuisine: req.body.cuisine,
          restaurant_id: req.body.restaurant_id,
          admin: req.body.admin,
          close_location: req.body.close_location,
          status: req.body.status
        }
      }
    );
    res.json(updateResturant);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
