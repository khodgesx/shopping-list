const express = require('express')
const List = require('../models/list')
const router = express()
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

//show one list of lists:
router.get('/:id', async (req, res)=>{
    const list = await List.findById(req.params.id)
    console.log(list)
    try{
        res.send({
            success: true,
            data: list
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