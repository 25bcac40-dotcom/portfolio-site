const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/contact", (req, res) => {
  const data = req.body;

  fs.appendFileSync("contacts.txt", JSON.stringify(data) + "\n");

  console.log("New Contact:", data);

  res.send("Data received successfully");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
console.log("TEST LINE");