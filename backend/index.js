require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = process.config.PORT || 8080
const bookRouter = require("./routes/book.router")

app.use(cors({
    origin: '*'
}))

app.get("/", (req, res)=>{
    res.send('hello world')
})

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

db.on("error", console.error.bind(console, "mongodb connection error"))

db.once("open", ()=>{
    console.log("connected to DB...");
})

app.use(express.json())
app.use(bookRouter)

app.listen( PORT, (req, res)=>{
    console.log(`server started on port ${PORT}...`)
} )