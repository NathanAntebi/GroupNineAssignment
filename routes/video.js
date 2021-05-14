var express = require("express"),
    Router = express.Router();
const Video = require("../models/videos.js")
const View = require("../models/views.js")


//CREATE a video
Router.post("/video", (req, res) => {
    const { name, published_status } = req.body
    Video.create({name, published_status}, (err, videoCreated) => {
        if(err){
            res.json({"status": "failed", "error": err})
        }else{
            console.log(videoCreated)
            res.json({"status": "success", videoId: videoCreated._id})
        }
    })
})


//UPDATE a video
Router.put("/video/:id", (req, res) => {
    const { id } = req.params
    const { name, published_status } = req.body
    console.log(id)
    Video.findByIdAndUpdate(id, {name, published_status}, (err, videoUpdated) => {
        if(err){
            res.json({"status": "failed", "error": err})
        }else{
            //Grab newly video with updated values and send back in JSON to API caller
            Video.findById(id, (err, video) => {
                if(err){
                    console.log("error")
                    res.json({"status": "an error occurred. Error: " + err})
                }else{
                    res.json({"status": "success", videoId: video._id, name: video.name, published_status: video.published_status,})
                }
            })           
        }
    })
})

//GET video tracker
Router.get("/video/track/:id", (req, res) => {
    const { id } = req.params
    Video.findById(id, (err, video) => {
        if(err){
            res.json({"status": "an error occurred. Error: " + err})
        }else{
            View.create({videoId:video._id}, (err, view) => {
                if(err){
                    res.json({"status": "an error occurred. Error: " + err})
                }else{
                    video.views.push(view._id);
                    video.save();
                    res.json({"status": "success", videoId: video._id, view_id: view._id})
                }
            })
        }
    })
})


//GET video count for a specific video
Router.get("/video/viewcount/:id", (req, res) => {
    const { id } = req.params
    const { start_date, end_date } = req.query
    if(start_date == undefined && end_date == undefined){
        View.find({videoId: id}, (err, view) => {
            if(err){
                res.json({"status": "an error occurred. Error: " + err})
            }else{
                res.json({"status": "success", videoId: id, view_count: view.length})
            }
        })
    }else{
        View.find({videoId: id, "date_viewed":{ $gte:start_date, $lt:end_date }}, (err, view) => {
            if(err){
                res.json({"status": "an error occurred. Error: " + err})
            }else{
                res.json({"status": "success", videoId: id, view_count: view.length})
            }
        })
    }
})

module.exports = Router;