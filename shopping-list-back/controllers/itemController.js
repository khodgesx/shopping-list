const express = require('express')
const router = express()
const Item = require('../models/item')
const User = require('../models/user')



router.post ('/', async (req, res)=>{
    try{
    
    const newItem = await Item.create(req.body)
    console.log(newItem)
        res.send({
            success:true,
            data: newItem
        })
    }catch(err){
        res.send({
            success:false,
            data:err.message
        })

    }
})


// //show
// router.get('/:id', async (req, res)=>{
//     const wine = await Wine.findById(req.params.id)
//     try{
//         res.send({
//             success:true,
//             data: wine
//         })

//     }catch(err){
//         res.send({
//             success:false, 
//             data:err.message
//         })
//     }
// })

// //update
// router.put('/:id', async (req, res)=>{
//     const wine = await Wine.findByIdAndUpdate(req.params.id, req.body, {new:true})
//     console.log(req.body)
   
//     try{
//         res.send({
//             success:true,
//             data: wine
//         })

//     }catch(err){
//         res.send({
//             success:false, 
//             data:err.message
//         })
//     }
// })
// //update photo 
// router.put('/update-photo/:id', upload.single('img'), async (req, res)=>{
//     try{
//         const wine = await Wine.findByIdAndUpdate(req.params.id, req.body, {new:true})
//         // console.log(req.body)
//         // console.log(req.params.id)
//         // console.log(req.body.img)

//         res.send({
//             success:true,
//             data: wine
//         })

//     }catch(err){
//         res.send({
//             success:false, 
//             data:err.message
//         })
//     }
// })

// //delete
// router.delete('/:id', async (req, res)=>{
//     const wine = await Wine.findByIdAndDelete(req.params.id)
//     if(!wine){
//         throw new Error('No wine by that id')
//     }
//     try{
//         res.send({
//             success:true,
//             data: wine
//         })

//     }catch(err){
//         res.send({
//             success:false, 
//             data:err.message
//         })
//     }
// })


module.exports = router