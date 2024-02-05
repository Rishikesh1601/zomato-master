import express from "express";

import { RestrauntModel } from "../../database/allModels";
//import validations
import { ValidateRestrauntCity,ValidateRestrauntSearchString } from "../../Validation/restraunt";
import { ValidateRestrauntId } from "../../Validation/food";

const Router = express.Router();
//on home page after adding the city
Router.get("/",async(req,res)=>{
    try {
        await ValidateRestrauntCity(req.query);
        const {city} = req.query;
        const restraunts = await RestrauntModel.find({city});
        return res.json({restraunts})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

//get particular restraunts with id
Router.get("/:_id",async(req,res)=>{
    try {
        await ValidateRestrauntId(req.params);
        const {_id} = req.params;
        const particularRestraunt = await RestrauntModel.findOne(_id)
        return res.json({particularRestraunt})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

//search for a particular restraunt
Router.get("/search",async(req,res)=>{
    try {
        await ValidateRestrauntSearchString(req.body);
        const {searchString} = req.body;
        const searchRestraunts = await RestrauntModel.find({
            name : {$regex:searchString,$options:"i"}
        })
        return res.json({searchRestraunts})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

export default Router;