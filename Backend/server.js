const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.status(200).json({'hello':'sjson'})
})
app.get('/notes')
app.post('/notes')
app.put('/notes/:id')
app.get('/notes/:id')
app.delete('/notes/:id')

app.listen(8000, (error)=>{
    if(!error){
        console.log('Listening on port 8000');
    } else {
        console.log('Error:',error);
    } 
})