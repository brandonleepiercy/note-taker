//Requiring path to display the html files in the repo on Gets
const path = require("path");

//Exports a function to server.js which handles sending html files
module.exports = (app) => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
};