// Set up express
const express = require("express");
const app = express();
const port = 8000;

// Import individual route files
const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const contactRoute = require("./routes/contact");
const dateRoute = require("./routes/date");

// Mount routes
app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.use("/date", dateRoute);

// Start server
app.listen(port, () => console.log(`Node server is running on port ${port}...`));
