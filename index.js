const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

app.post("/register", (req, res) => {
  const regData = req.body;
  console.log(regData);
  res.send(regData);
});

app.post("/login", (req, res) => {
  const regData = req.body;
  console.log(regData);
  res.send(regData);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
