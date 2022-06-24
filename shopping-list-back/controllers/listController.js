const express = require('express')
const List = require('../models/list')
const router = express()
const listController = require('../models/list')
const User = require('../models/user')


//get index of lists:
router.get('/', async (req, res)=>{
    const lists = await List.find()
    console.log(lists[0].title)
    try{
        res.send({
            success: true,
            data: lists
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})

//create new list:
router.post ('/', async (req, res)=>{
    try{
   
    const userData = req.body 
    
    const newList = await List.create(req.body)
    console.log(newList)
        res.send({
            success:true,
            data: newList
        })
    }catch(err){
        res.send({
            success:false,
            data:err.message
        })

    }
})

module.exports = router