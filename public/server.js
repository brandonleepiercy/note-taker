const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 7777;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});