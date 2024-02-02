import express from "express";

import { ImageModel, MenuModel } from "../../database/allModels";

const Router = express.Router();

//get the menu list by the menu id
Router.get("/list/:_id",async(req,res)=>{
    try{
    const {_id} = req.params;
    const menu = await MenuModel.findOne({_id})
    return res.json({menu});
    }catch(error){
        return res.status(500).json({error:error.message})
    }
})

//get the menu image based on the id
Router.get("/image/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const menus = await ImageModel.findOne({_id})
        return res.json({menus})
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

export default Router;