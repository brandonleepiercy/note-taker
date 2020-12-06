//Imports the data from the db.json file
const path = require('path');

//Exports a function to server.js file that handles api quests
module.exports = (app) => {
    app.get("/api/notes", (req,res) => {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });
};