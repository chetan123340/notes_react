const noteModel = require('../Models/NoteSchema')

const all_notes = (req,res)=>{
    res.status(200).json({"mssg":"success"})
}

const add_note = async(req,res)=>{
    const {title, content} = req.body
    const note = await noteModel.create({title, content})
    res.status(200).json(note)
}

const update_note = (req,res)=>{}
const single_note = (req,res)=>{}
const delete_note = (req,res)=>{}

module.exports = {all_notes, add_note, update_note, single_note, delete_note}