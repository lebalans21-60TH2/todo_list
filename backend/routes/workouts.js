const express = require('express');

const router = express.Router()

//get all workout
router.get("/",(req, res)=>{
    res.json({mssg:"hello"})
})
//get single workout
router.get('/:id', (req, res) =>{
    res.json({mssg:"get single workout"})
})
//post a new workout
router.post('/',(req, res) =>{
    res.json({mssg:"post a new workout"})
})

//detete a workout
router.delete('/:id',(req, res) =>{
    res.json({mssg:"delete a workout"})
})

//update a workout
router.patch('/:id',(req, res) =>{
    res.json({mssg:"update workout"})
})



module.exports = router