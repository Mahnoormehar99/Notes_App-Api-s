const express = require('express');
const notemodel = require('./models/note.model');


const App = express();



App.use(express.json());

App.post('/notes', (req, res) => {
    // Handle POST request for creating a new note


    const data = req.body

    notemodel.create(
        {
            title: data.title,
            discription: data.discription
        }
    )



    res.status(201).json({ message: 'Note created successfully' });
    


});

App.get('/notes', async (req, res) => {
    // Handle GET request for retrieving all notes

    const notes =  await notemodel.find({});
    res.status(200).json({
        Message: 'Notes retrieved successfully',

        notes: notes });
});

App.delete('/notes/:id', async (req , res) =>{

    const id = req.params.id;
    await notemodel.findOneAndDelete({_id : id});
    

    res.status(200).json({ message: 'Note deleted successfully' });
})

App.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const updatedvalue= req.body.discription;

    await notemodel.findOneAndUpdate( 
        {_id: id},
        {discription : updatedvalue});

    res.status(200).json({ message: 'Note updated successfully' });
})





module.exports = App;



