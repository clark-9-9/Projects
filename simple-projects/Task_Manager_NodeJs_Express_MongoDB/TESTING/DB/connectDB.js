const mongoose = require('mongoose')


const DB = (url) => {
   return mongoose.connect(url, console.log("connected to DB"))
}




module.exports = DB