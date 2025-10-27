const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const today = new Date();
  const year = today.getFullYear();
  const dayOfMonth = today.getDate();
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const monthName = months[today.getMonth()];
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayName = weekdays[today.getDay()];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Date Information</title>
      <style>
        body {
          font-family: "Franklin Gothic Medium", Arial, sans-serif;
          text-transform: uppercase;
          text-align: left;
          margin: 50px;
          line-height: 20%;
          background-color: #f4f4f4;
        }
        h1 { color: #333; }
        h3 { color: #666; margin-bottom: 10px; }

        nav {
          margin: 5px 0 15px 0;
          padding: 5px 0;
        }
        nav a {
          font-family: "Franklin Gothic Medium", Arial, sans-serif;
          text-transform: uppercase;
          text-align: left;
          color: #cc0000ff;
          text-decoration: none;
          margin-right: 20px;
          line-height: 20%;
        }
        nav a:hover { text-decoration: underline; }

        p, a { color: #000; }
        a { color: #cc0000ff; }
      </style>
    </head>
    <body>
      <h1>LUCIO LUONGO</h1>
      <h3>WEB CODER AND CREATIVE DIRECTOR</h3>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/date">Date</a>
      </nav>

      <p>Current Date</p>
      <p><strong>Year:</strong> ${year}</p>
      <p><strong>Month:</strong> ${monthName}</p>
      <p><strong>Date:</strong> ${dayOfMonth}</p>
      <p><strong>Week day:</strong> ${dayName}</p>
      <script>console.log("Date page loaded!");</script>
    </body>
    </html>
  `);
});

module.exports = router;
