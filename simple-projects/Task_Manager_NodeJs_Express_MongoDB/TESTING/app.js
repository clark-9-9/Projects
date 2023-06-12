require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const connectDB = require('./DB/connectDB')
const tasks = require("./routes/tasks")




app.use(express.static("views"))
app.use(express.json())




app.use('/api/v1/tasks', tasks)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/task.html"))
})







async function main() {

  try {
    const port = 3000
    
    const DB = await connectDB(process.env.MONGO_URI)
    app.listen(port , console.log(`server runing on port ${port}`)) 



  } catch(err) {
    console.log(err);
  }
}

main()