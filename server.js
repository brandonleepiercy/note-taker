// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 7777;

// Get method for the default path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

// Get method for the notes path
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "/notes.html"));
});


//Spinning server on the port defined in the dependencies
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});