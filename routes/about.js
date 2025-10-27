const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About</title>
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

        h5 {
          color: #666;
          line-height: 120%;
          text-transform: lowercase;
          font-family: Arial, sans-serif;
        }

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

      <p>About page</p>
      <h5>
        Born in Naples in 1972, Lucio Luongo is an accomplished art and creative director. 
        With extensive experience in Naples, Rome, Bologna, Milan, Berlin, and more recently London,
        he has established an undisputed reputation as a leader in his field.
        <br><br>
        Lucio is an artist, programmer, and art director currently based in London, United Kingdom. 
        He specialises in creating video and interactive works that explore and transcend the boundaries 
        between music and visuals, with a thematic focus on love, death, and the vast array of emotions in between.
        <br><br>
        He has taught creative coding and media arts as a performative exploration of diverse software platforms. 
        During his tenure as the creative director of HUB Digital Labs, Lucio's passion for visual interaction 
        led him to collaborate with numerous artists, including Gerald Simpson (A Guy Called Gerald), Gaudi, 
        Jeff Mills (Axis Records), System Seven, RETINA.IT (Hefty Records), Ben UFO, Gaetano Parisio, Robag Wruhme, 
        Jahcoozi, and Brando Lupi.
        <br><br>
        He has also worked with Avatar 41, an ensemble including Andrea Gabriele, Mario Masullo, Maurizio Martusciello, 
        Marco Messina, Lino Monaco, Nicola Buono, Claudio Sinatti, Maria Di Donna, and Mattia Casalegno.
        <br><br>
        Lucio formerly served as the Director of the Multimedia and Design module at the Istituto Superiore del Design 
        in Naples from 2004 to 2006. He taught Desktop Publishing and Colour Theory, while also coordinating experimental 
        multimedia courses and leading an interdisciplinary team at HUB Digital Labs.
        <br><br>
        Lucio is currently dedicating himself to the study of Creative Computing at Goldsmiths, University of London.
        Embracing this pivotal opportunity, he is working hard to refine his artistic language, blending technology and creativity.
      </h5>

      <p>Learn more at <a href="https://lucioluongo.com/" target="_blank">Lucioluongo.com</a></p>
      <script>console.log("About page loaded!");</script>
    </body>
    </html>
  `);
});

module.exports = router;
