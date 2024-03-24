const express = require('express')
const {
    all_notes, add_note, update_note, single_note, delete_note
} = require('../Controllers/NoteControllers')

const router = express.Router()
router.use(express.json())

router.get('/', all_notes)

router.post('/', add_note)

router.put('/:id', update_note)

router.get('/:id', single_note)

router.delete('/:id', delete_note)

module.exports = router
