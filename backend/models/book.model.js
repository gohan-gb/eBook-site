const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {type:String, required: true},
    imgUrl: {type:String, required: true},
    author: {type:String, required: true}
})

const BookModel = mongoose.model('book', bookSchema)
module.exports =  BookModel 