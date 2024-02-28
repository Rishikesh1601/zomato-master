import express from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

//get the user data
Router.get("/:_id",async(req,res)=>{
    try {
        const {_id} = req.params;
        const getUser = await UserModel.findById(_id)
        return res.json({user: getUser});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


//update the user data
Router.put("/update/:_userId",async(req,res)=>{
    try {
        const {_userId} = req.params;
        const {userData} = req.body;
        const updateUser = await UserModel.findByIdAndUpdate(
            _userId,
            {
                $set:userData
            },
            {new:true}
        );
        return res.json({user:updateUser})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

export default Router;
//post user deatails
// Router.post("/user",async(req,res)=>{
//     try {
        
//     } catch (error) {
//         return res.status(500).json({error:error.message})
//     }
// })