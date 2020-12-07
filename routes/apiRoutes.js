//Imports the data from the db.json file
const db = require("../db/db.json");
const fs = require('fs');

//Exports a function to server.js file that handles api quests
module.exports = (app) => {
    app.get("/api/notes", (req,res) => {
        res.json(db);
    });

    app.post("/api/notes", (req,res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
        let newNote = req.body;
        let noteID = (savedNotes.length).toString();
        newNote.id = noteID;
        savedNotes.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        console.log("New note saved to the .db file, note: "+newNote);
        res.json(db);
    });

    app.delete("/api/notes", (req,res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
        let noteID = req.params.id;
        let newID = 0;
        console.log(`Deleting note with ID ${noteID}`);
        savedNotes = savedNotes.filter((currNote) => {
            return currNote.id != noteID;
        })
        for (currNote of savedNotes) {
            currNote.id = newID.toString();
            newID++;
        }
        
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        res.json(db);
    });
};