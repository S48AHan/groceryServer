const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = process.env.PORT || 5000;

// Simulated user data (replace with a database in a real application)
const users = [{ email: "demo@example.com", password: "demopwd", roles: "admin" }];
const secretKey = "yourSecretKey"; // Replace with a secure secret key for JWT

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Running Successfully peacefully");
});

app.post("/register", (req, res) => {
  const regData = req.body;
  console.log(regData);
  // Save user data to the database (or perform registration logic)
  // ...

  res.send(regData);
});

app.post("/login", (req, res) => {
  const { email, pwd } = req.body;
  console.log("Received login request:", { email, pwd });

  // Find user in the simulated user data
  const user = users.find((u) => u.email === email && u.password === pwd);

  if (user) {
    // Create a JWT token with user information
    const token = jwt.sign({ email: user.email, roles: user.roles }, secretKey, {
      expiresIn: "1h", // Token expiration time (adjust as needed)
    });

    // Return the JWT token and roles
    res.json({ accessToken: token, roles: user.roles });
  } else {
    console.log("Login failed: Invalid email or password");
    res.status(401).send("Invalid email or password");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
