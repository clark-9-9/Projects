const TaskModel = require('../models/model') 


const getAllTask = async (req, res) => {
    const tasks = await TaskModel.find({})
    res.status(200).json({ tasks })

}



const getTask = async (req, res) => {

    try {
        const{ id } = req.params
        const tasks = await TaskModel.find({_id: id})

        if (!tasks[0]) {
            return res.status(404).json({ msg: `no task with an id ${id}` })
        }

        res.status(200).json({ tasks })


    } catch(err) {
        res.status(500).json({ msg:err })
    }

}



const createTask = async (req, res) => {

    try {
        const tasks = await TaskModel.create(req.body)
        res.status(201).json({ tasks })


    } catch(err) {
        res.json({ err })
    }

}



const updateTask = async (req, res) => {
    try {
        const{ id } = req.params
        const tasks = await TaskModel.findOneAndUpdate({ _id: id }, req.body, { runValidators: true } )

        if(!tasks) {
            return res.status(404).json({ msg: `no task with an id ${id}` })
        }

        res.status(200).json({ tasks })
    } catch(err) {
        res.json({ err })
    }
}



const deleteAllTask = async (req, res) => {
    
    try {
        const tasks = await TaskModel.deleteMany({})
        res.json({ tasks })

    } catch(err) {
        res.json({ err })
    }

}


const deleteTask = async (req, res) => {
    try {
        const{ id } = req.params

        const tasks = await TaskModel.findOneAndDelete({_id: id })

        if (!tasks) {
            return res.status(404).json({ msg: `no task with an id ${id}` })
        }


        res.json({ tasks })
        
    } catch(err) {
        res.json({ err })
    }
}






module.exports = {
    getAllTask, getTask, createTask, updateTask, deleteTask, deleteAllTask
}