import express from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

//get the user detail
Router.get("/user",async(req,res)=>{
    try {
        const {user} = req.body;
        const users = await UserModel.find({
            name : {$regex:user,$option:"i"}
        })
        return res.json({users});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

//post user deatails
Router.post("/user",async(req,res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})