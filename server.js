require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

const port = process.env.PORT || 5000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "build")));

app.get("/api/thirdParty", (req, res) => {
  // 1. receive request
  // 2. append API keys and make real request to 3rd party API
  // 3. send response data to front end to be re-rendered
  secret = process.env.MY_SECRET_IS === "safe" ? "durian" : "lavender";
  res.json({ thirdPartyResponse: secret });
});

app.get("/api/health", (req, res) => {
  res.json("pinged");
});

// Only ping between 8AM and 11PM (15h) because
// the free dyno up-time on Heroku is approx. 17h/day.
const hourIsWithinPingRange = () => {
  const today = new Date();
  const hour = today.getHours();

  // Singapore is UTC + 8
  const UTC_DIFFERENCE = 8;
  const STARTING_HOUR_IN_UTC = 8 - UTC_DIFFERENCE;
  const ENDING_HOUR_IN_UTC = 23 - UTC_DIFFERENCE;

  console.log(
    `[${STARTING_HOUR_IN_UTC} - ${ENDING_HOUR_IN_UTC}] incl ${hour}?`
  );

  return hour >= STARTING_HOUR_IN_UTC && hour < ENDING_HOUR_IN_UTC;
};

app.get("/api/keepSelfAwake", (req, res) => {
  const healthEndpoint = `${req.protocol}://${req.hostname}:${port}/api/health`;
  console.log(`requesting for ${healthEndpoint}`);

  const twentyMinutesInMS = 2000; //1200000;
  const timerID = setInterval(() => {
    if (!hourIsWithinPingRange()) {
      clearInterval(timerID);
    }

    axios.get(healthEndpoint);
  }, twentyMinutesInMS);

  res.json({
    message: `started self pinger at interval of ${twentyMinutesInMS /
      1000} secs`,
  });
});

// Order matters. Put all API endpoints above app.get("*")
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port);

console.log("App is listening on port " + port);
