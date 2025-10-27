const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact</title>
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

      <p>Contact page</p>
      <p>Get in touch via <a href="mailto:lluon001@gold.ac.uk">lluon001@gold.ac.uk</a></p>
      <script>console.log("Contact page loaded!");</script>
    </body>
    </html>
  `);
});

module.exports = router;
