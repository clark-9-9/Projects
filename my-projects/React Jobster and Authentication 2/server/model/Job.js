const mongoose = require('mongoose')


const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, "Please provide company name"],
        maxLength:50
    },
    
    position:{
        type:String,
        required:[true, "Please provide position name"],
        maxLength:50
    },
    
    status:{
        type:String,
        enum:["interview", "declined", "pending"],
        default: "pending"
    },
    
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true, "Please provide user"]
    },
    
    location:{
        type:String,
        default:"My City"
    },

    jobType:{
        type:String,
    }

}, { timestamps: true })



module.exports = mongoose.model("Job", JobSchema)




