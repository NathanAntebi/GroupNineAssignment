var mongoose = require("mongoose")

var groupNineViewSchema = new mongoose.Schema({
    videoId: String,
    date_viewed: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("View", groupNineViewSchema);