const express = require("express");
const router = express.Router()

const {
    getAllTask, getTask, createTask, updateTask, deleteTask, deleteAllTask

} = require('../controller/tasks')



router.route('/').get(getAllTask).post(createTask).delete(deleteAllTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)




module.exports = router