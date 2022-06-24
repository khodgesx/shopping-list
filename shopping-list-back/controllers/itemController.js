const express = require('express')
const router = express()
const itemController = require('../models/item')
const User = require('../models/user')


//index
//get wines by user ID
// router.get('/user/:id', async (req, res)=>{
//     const userId = await User.findById(req.params.id)
//     const wines = await Wine.find({user:userId})
//     try{
//         res.send({
//             success:true,
//             data: wines
//         })
        
//     }catch(err){
//         res.send({
//             success:false, 
//             data:err.message
//         })
//     }
// })

// //create route - saving from spoonacular api
// router.post ('/:id', async (req, res)=>{
//     try{
//     const wineData = req.body 
//         const newWine = await Wine.create({
//             name: wineData.name,
//             varietal: wineData.varietal,
//             img: wineData.img,
//             mealPairs:wineData.mealPairs,
//             notes: wineData.notes,
//             rating: wineData.rating,
//             type: wineData.type,
//             apiId: wineData.apiId,
//             user: req.params.id
//         })
//             res.send({
//                 success:true,
//                 data: newWine
//             })
               
//     }catch(err){
//         console.log(err)
//         res.send({
//             success:false,
//             data:err.message
//         })

//     }
// })
// //create new wine with photo upload
// router.post ('/new/:id', upload.single('img'), async (req, res)=>{
//         try{
//         const wineData = req.body 
//             const newWine = await Wine.create({
//                 name: wineData.name,
//                 varietal: wineData.varietal,
//                 img: wineData.img,
//                 mealPairs:wineData.mealPairs,
//                 notes: wineData.notes,
//                 rating: wineData.rating,
//                 apiId: wineData.apiId,
//                 type: wineData.type,
//                 user: req.params.id
//             })
//                 res.send({
//                     success:true,
//                     data: newWine
//                 })
                   
//         }catch(err){
//             console.log(err)
//             res.send({
//                 success:false,
//                 data:err.message
//             })
    
//         }
//     })

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