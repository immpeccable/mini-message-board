var express = require('express');
var router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages, format: distanceInWords });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});
router.post("/new", function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
