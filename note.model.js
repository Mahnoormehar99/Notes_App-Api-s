const mongoose = require ('mongoose');

const noteschema = new mongoose.Schema({

    tittle: String,
    discription: String
});

const notemodel = mongoose.model('note', noteschema);

module.exports = notemodel;