const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Routes and Logic for Payments and Sign-ups go here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
