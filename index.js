require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

app.get("/api/cloudinary", (req, res) => {
  // 1. receive request
  // 2. append API keys and make real request to 3rd party API
  // 3. send response data to front end to be re-rendered
  secret = process.env.MY_SECRET_IS === "safe" ? "lavender" : "durian";
  res.json({ cloudinaryResponse: secret });
});

// Order matters. Put all API endpoints above app.get("*")
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

// app.get("/keepSelfAwake", (req, res, next) => {
//   setInterval(axios.get("/"), 36000);
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
