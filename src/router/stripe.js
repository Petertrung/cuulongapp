const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const Orders = require("../models/orders")


//api test
router.get("/", async (req, res) => {
    try {
      res.send("hello stripe");
    } catch (err) {
      res.json({ message: err });
    }
  });

router.post("/create-session", async (req, res) => {
     try {
        const session = await stripe.checkout.sessions.create({
            success_url: "http://localhost:3000/full/payment/"+ req.body.orderId,
            cancel_url: "http://localhost:3000/",
            payment_method_types: ['card'],
            mode: 'payment',
            line_items:[{
                quantity: 1,
                price_data:{
                  currency: 'usd',
                  product: 'prod_Ik4tZdAKIGpTf8',
                  unit_amount: req.body.price
              }
            },]
        })
        res.json({
            sessionId: session.id,
          });
      } catch (err) {
        res.json({ message: err });
      }
    
  });

  router.post("/success", async (req, res) => {
    try {
      const paySuccess = await Orders.updateOne(
        { _id: req.body.orderId },
        {
          $set: {
            pay: "1"
          }
        }
      );
      res.json(paySuccess);
    } catch (err) {
      res.json({ message: err });
    }
  });



module.exports = router;