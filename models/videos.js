var mongoose = require("mongoose")
var Schema = mongoose.Schema;
const View = require("./views.js")

var groupNineVideoSchema = new mongoose.Schema({
	name: String,
    published_status: String,
    published_date: {
        type: Date,
        default: Date.now
    },
    views:[
        {type: Schema.Types.ObjectId, ref: 'View'}
    ]
})

module.exports = mongoose.model("Video", groupNineVideoSchema);