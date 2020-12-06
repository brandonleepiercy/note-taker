// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 7777;

// Setting up express to handle data parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Spinning server on port 7777
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});