//Imports the data from the db.json file
const db = require("../db/db.json");

//Exports a function to server.js file that handles api quests
module.exports = (app) => {
    app.get("/api/notes", (req,res) => {
        res.json(db);
    });
};