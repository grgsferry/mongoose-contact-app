const { response } = require("express");
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  });
  try {
    const savedContact = await contact.save();
    res.json(savedContact);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.deleteOne({ _id: req.params.id });
    res.json(contact);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.updateOne({ _id: req.params.id }, { $set: { name: req.body.name, phoneNumber: req.body.phoneNumber, email: req.body.email } });
    res.json(updatedContact);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
