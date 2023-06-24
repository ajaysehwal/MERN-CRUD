const Note = require('../models/note.js');

const create = async (req, res) => {
    const { title, body } = req.body;

    const note = await Note.create({
        title,
        body
    })
    res.json({ note: note });
}
const fetchnotes = async (req, res) => {
    const notes = await Note.find();
    res.json({ notes: notes });
}

const deletenode = async (req, res) => {
    const noteId = req.params.id;
    const note = await Note.deleteOne({ id: noteId });
    res.json({ success: "Record deleted" });
}
const updatenode = async (req, res) => {
    const noteId = req.params.id;
    const { title, body } = req.body;

    const note = await Note.findByIdAndUpdate(noteId, {
        title,
        body
    });
    res.json({ note: note });
}
const fetchnote = async (req, res) => {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    res.json({ note: note })
}

module.exports = {
    createnode: create,
    fetchnote: fetchnote,
    fetchnotes: fetchnotes,
    updatenode: updatenode,
    deletenode: deletenode

}