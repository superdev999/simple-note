const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const NotesModel = require("./models/notes");
Mongoose.connect("mongodb://localhost:27017/simplenote", {
    useCreateIndex: true,
    useNewUrlParser: true
});

let app = Express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post("/add_note", async (request, response) => {
    console.log("[Add New Note]", request.body);
    try {
        const note = new NotesModel(request.body);
        const result = await note.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.post("/update_note", async (request, response) => {
    console.log("[Update Note]");
    try {
        NotesModel.findOne({ _id: request.body.id })
            .then(note => {
                note.set(request.body);
                const result = note.save();
                response.send(note);
            })
            .catch( err => {
                    response.status(500).send(error);
                }
            )
    } catch (error) {
        response.status(500).send(error);
    }
});
app.get("/get_notes", async (request, response) => {
    console.log("[Get All Notes]");
    try {
        const notes = await NotesModel.find().sort({'createdAt': -1}).exec();
        response.send(notes);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3001, () => {
    console.log("Listening at :3001...");
});