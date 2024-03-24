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

const add_note = (req, res) => {
    const { title, content } = req.body
    noteModel.create({ title, content }).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(400).json(err)
    })
}

const update_note = (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    noteModel.findByIdAndUpdate(id, { title, content }).then(note => {
        res.status(200).json(note)
    }).catch(err => {
        res.status(400).json(err)
    })
}

const single_note = (req, res) => {
    const { id } = req.params
    noteModel.findById(id).then((note) => {
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