require('dotenv').config();
const express = require('express');

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
//listen for request
app.listen(process.env.PORT, ()=>{
    console.log("listen on ",process.env.PORT);
})