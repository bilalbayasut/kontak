const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    get all contacts belong to logged in user
// @access  Private
router.get("/", (req, res) => {
  res.send("Get contacts");
});

// @route   POST api/contacts
// @desc    add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("add contacts");
});

// @route   PUT api/contacts/:id
// @desc    update existing contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @route   DELETE api/contacts/:id
// @desc    delete existing contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
