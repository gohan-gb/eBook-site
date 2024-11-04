const express = require('express')
const router = express.Router()
const multer = require('multer')
const {storage} = require('../utils/cloudinary')

const upload = multer({storage})

const { createBook, getBooks } = require('../controllers/book.controller')

router.post('/books', upload.single('imgUrl'), createBook)
router.get('/books', getBooks)

module.exports = router;