require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
//express app
const app = express();
const workoutRoutes = require('./routes/workouts')
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, res.method)
    next()
})
//routes
app.use('/api/workouts', workoutRoutes);

//conect mongoose
mongoose.connect(process.env.MONGO_URL)
   .then(()=>{
     //listen for request
     app.listen(process.env.PORT, ()=>{
    console.log("connectin mongoosedb ",process.env.PORT);
})
   })
   .catch((error)=>{
    console.log(error)
})

