const express = require('express')
const app = express();
const PORT = process.config.PORT || 8080

app.listen( PORT, (req, res)=>{
    console.log(`server started on port ${PORT}`)
} )