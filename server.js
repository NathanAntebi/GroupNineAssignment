var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")
    require('dotenv').config()

 
const {
    PORT,
    DB_USER,
    DB_PW
} = process.env


//Connect to mongoDB
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PW}@groupninemedia.gnwhs.mongodb.net/Groupnine?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true } )
var videoRoutes = require("./routes/video.js")
var app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(videoRoutes)


app.listen(3000, () => {
    console.log(`listening on port ${PORT}`)
})