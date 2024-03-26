const noteModel = require('../Models/NoteSchema')

const all_notes = async (req, res) => {
    noteModel.find({}).sort({ createdAt: -1 })
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

const add_note = async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = await noteModel.create({ title, content });
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json(err);
    }
};


const update_note = (req, res) => {
    const { _id } = req.params
    const { title, content } = req.body
    noteModel.findByIdAndUpdate(_id, { title, content }).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(400).json(err)
    })
}

const single_note = (req, res) => {
    const { _id } = req.params
    noteModel.findById(_id).then((note) => {
        res.status(200).json(note)
    }).catch((err) => {
        res.status(400).json(err)
    })
}

const delete_note = (req, res) => {
    const { id } = req.params
    noteModel.findByIdAndDelete(id).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(400).json(err)
    })
}

module.exports = { all_notes, add_note, update_note, single_note, delete_note }