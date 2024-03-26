require('dotenv').config()

const cors = require('cors')
const express = require('express')
const NoteRouter = require('./Router/NotesRoutes')
const mongoose = require('mongoose');
const app = express()
 
app.use(express.json())
app.use(cors())
app.use('/api/notes', NoteRouter)

mongoose.connect(process.env.URI)
    .then(()=>{
        app.listen(8000, (error)=>{
            if(!error){
                console.log('Listening on port 8000 and connected to db');
            }
        })
    })
    .catch((error)=>{
        console.log(error);
    })
