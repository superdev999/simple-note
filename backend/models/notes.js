
const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
    title: String,
    content: String
}, { timestamps: true });

module.exports = mongoose.model('NotesModel', notesSchema);
