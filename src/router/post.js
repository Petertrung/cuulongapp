const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurants");
const Items = require("../models/items");
const Orders = require("../models/orders")
const Users = require("../models/user")

//api test
router.get("/", async (req, res) => {
  try {
    res.send("hello world");
  } catch (err) {
    res.json({ message: err });
  }
});

//Get Current User
router.get("/user/:useId", async (req, res) => {
  try {
    const user = await Users.findById(req.params.useId);
    res.json(user);
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
    status: req.body.status,
    address: req.body.address
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
          address: req.body.address
        }
      }
    );
    res.json(updateResturant);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get all items
router.get("/items", async (req, res) => {
  try {
    const items = await Items.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit Items
router.post("/items", async (req, res) => {
  const items = new Items({
    name: req.body.name,
    wave_id: req.body.wave_id,
    type: req.body.type
  });
  try {
    const savedPost = await items.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
//Get order By Creater
router.get("/restbywave/:restId", async (req, res) => {
  try {
    const Rest = await Restaurants.findOne({restaurant_id: req.params.restId});
    res.json(Rest);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get order By Creater
router.get("/orders/:orderId", async (req, res) => {
  try {
    const orders = await Orders.find({user_id: req.params.orderId});
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get single order
router.get("/order/:orderId", async (req, res) => {
  try {
    const orders = await Orders.findById(req.params.orderId);
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get order By Rest
router.get("/orderbyrest/:restId", async (req, res) => {
  try {
    const order = await Orders.find({_id: { $in : req.params.restId }});
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit Orders
router.post("/orders", async (req, res) => {
  const orders = new Orders({
    invoice_id: req.body.invoice_id,
    restaurant_id: req.body.restaurant_id,
    user_id: req.body.user_id
  });
  try {
    const savedPost = await orders.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
