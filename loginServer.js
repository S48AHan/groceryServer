const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;

// Simulated user data (replace with a database in a real application)
const users = [{ userName: "demoUser", password: "demopwd", roles: "admin" }];

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Running Successfully peacefully");
});

app.post("/login", async(req, res) => {
  console.log("first");
  const { user, pwd } = await req.body;
  const reqData = req.body;
  console.log("Received login request:", reqData);
  console.log("Received user request:", user);
  console.log("Received pwd request:", pwd);
  // Find user in the simulated user data
  const user1 = users.find((u) => u.userName === user && u.password === pwd);

  if (user1) {
    // Return roles and a dummy access token (replace with a proper authentication mechanism)
    const roles = user1.roles;
    const accessToken = "dummyAccessToken";

    res.json({ accessToken, roles });
  } else {
    console.log("Login failed: Invalid user or pwd");
    res.status(401).send("Invalid user or pwd bujsos???");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
