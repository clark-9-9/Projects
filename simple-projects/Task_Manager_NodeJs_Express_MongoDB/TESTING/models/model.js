const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'it must provide a name'],
        maxLength: [25, "it must less than 25 characters"],
        minLength: [2, "it must more than 5 characters"]
    },

    completed: {
        type: Boolean,
        default: false
    }
})






const taskModel = mongoose.model("tasks-practise", taskSchema)

module.exports = taskModel