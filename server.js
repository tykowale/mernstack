const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const app = express();

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello!"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));