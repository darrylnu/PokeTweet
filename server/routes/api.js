const express = require('express');
const router = express.Router();
const mongodb = require("mongodb");
const db = require("../db");

const TWEETS_COLLECTIONS = "Tweets";

// TWEETS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/tweets"
 *    GET: finds all tweets
 *    POST: creates a new tweet
 */
router.get("/tweets", function (req, res) {
  db.get().collection(TWEETS_COLLECTIONS).find({}).toArray(function (err, data) {
    if (err) {
      handleError(res, err.message, "Failed to get tweets");
    } else {
      res.status(200).json(data);
    }
  });
});

router.post("/tweets", function (req, res) {
  const newTweet = req.body;

  if (!req.body.post) {
    handleError(res, "Invalid user input", "Must provide a tweet.", 400);
  } else {
    db.get().collection(TWEETS_COLLECTIONS).insertOne(newTweet, function (err, data) {
      if (err) {
        handleError(res, err.message, "Failed to post new tweet.");
      } else {
        res.status(201).json(data.ops[0]);
      }
    });
  }

});

module.exports = router;
