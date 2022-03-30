const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Course = new Schema({
    name:  { type: String},
    description:  { type: String},
    image:  { type: String},
    created_at: { type: Date, Default: Date.now},
    updated_at: { type: Date, Default: Date.now},

});

module.exports = mongoose.model('Course',Course);