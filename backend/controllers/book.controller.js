const BookModel = require('../models/book.model')
const multer = require('multer')
const {storage} = require('../utils/cloudinary')

const upload = multer({storage})

exports.createBook = async (req, res) => {
    try {
        
        const {title, author} = req.body

        let newBook = new BookModel({
            title:title,
            author:author,
            imgUrl: req.file.path
        })

        await newBook.save()

        res.status(201).json(newBook)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.getBooks = async(req, res)=>{
    try{
        const books = await BookModel.find()
        res.status(200).json(books)

    } catch( error ){
        res.status(500).json({message:error.message})
    }
}