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

//add item to list/update list item array:
router.put('/:id/add', async(req, res)=>{
    try{
        const currentList = await List.findById(req.params.id)
        const newItem = req.body;
        console.log(req.body)
        const listItems = currentList.items;
        listItems.push(newItem) 
        await currentList.save()
        console.log(currentList, newItem, currentList.items)
    }catch(err){
        console.log(err)
    }
})

router.delete('/:id', async (req, res)=>{
    const list = await List.findByIdAndDelete(req.params.id)
    if(!list){
        throw new Error('No list by that id')
    }
    try{
        res.send({
            success:true,
            data: list
        })

    }catch(err){
        res.send({
            success:false, 
            data:err.message
        })
    }
})
//update list:
// router.put('/:id', async (req, res)=>{
//     const list = await List.findByIdAndUpdate(req.params.id, req.body, {new:true})
//     console.log(req.body)
   
//     try{
//         res.send({
//             success:true,
//             data: list
//         })

//     }catch(err){
//         res.send({
//             success:false, 
//             data:err.message
//         })
//     }
// })

module.exports = router