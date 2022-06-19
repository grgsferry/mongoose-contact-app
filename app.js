const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const contactsRoutes = require("./routes/contacts");

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/contacts", contactsRoutes);

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to MongoDB.");
});

app.listen(3000, () => {
  console.log("App running.");
});
