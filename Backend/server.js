require('dotenv').config()


const express = require('express')
const NoteRouter = require('./Router/NotesRoutes')
const mongoose = require('mongoose');
const app = express()


app.get('/', (req, res)=>{
    res.redirect('/notes')
})

app.use('/notes', NoteRouter)

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
