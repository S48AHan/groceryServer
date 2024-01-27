const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const usersData = require("./usersData.json");
const app = express();

const PORT = process.env.PORT || 5000;



const users = usersData;
const secretKey = "yourSecretKey"; // Replace with a secure secret key for JWT

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Route for getting users
app.get("/users", (req, res) => {
  console.log(users);
  res.json(users);
});

app.get("/", (req, res) => {
  res.send("Server Running Successfully peacefully");
});

app.post("/register", (req, res) => {
  const regData = req.body;
  console.log(JSON.stringify(regData, null, 2)); // The third argument (2) is for indentation (optional)

  // Save user data to the database (or perform registration logic)
  // ...

  res.json(regData);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req);
  console.log("Received login request:", { email, password });

  // Find user in the simulated user data
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Create a JWT token with user information
    const token = jwt.sign(
      {name: user.name,
        designation: user.designation,
        contactNumber: user.contactNumber,
        email: user.email,
        roles: user.roles
        
         // Assuming this is a string
      },
      secretKey,
      { expiresIn: "1h" }
    );

    // Return the JWT token and roles
    res.json({ accessToken: token });
  } else {
    console.log("Login failed: Invalid email or password");
    res.status(401).send("Invalid email or password");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
