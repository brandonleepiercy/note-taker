//Imports the data from the db.json file
const db = require("../db/db.json");
const fs = require('fs');

//Exports a function to server.js file that handles api quests
module.exports = (app) => {
    app.get("/api/notes", (req,res) => { 
        res.json(db);
    });

    app.post("/api/notes", (req,res) => {
        let newNote = req.body;
        let noteID = (db.length).toString();
        newNote.id = noteID;
        db.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(db));
        console.log("New note saved to the .db file, note: "+newNote);
        res.json(true);
    });

    app.delete("/api/notes/:id", (req,res) => {
        //finding the id of the selected note
        let noteID = req.params.id;
        let newID = 0;
        console.log(`Deleting note with ID ${noteID}`);
        //splicing out the selected note
        db.splice(noteID, 1)
        for (currNote of db) {
            currNote.id = newID.toString();
            newID++;
        };
        console.log(db)
        //re-writing the modified .json file
        fs.writeFileSync("./db/db.json", JSON.stringify(db));
        res.json(true);
    });
};