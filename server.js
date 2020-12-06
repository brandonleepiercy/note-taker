// Dependencies
const express = require('express');
const port = process.env.PORT || 7777;

// Setting up express to handle data parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//Spinning server on port 7777
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});