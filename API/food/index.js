import express from "express";

import { FoodModel } from "../../database/allModels";
//import validationd
import { ValidateCategory,ValidateRestrauntId } from "../../Validation/food";

const Router = express.Router();
//get food
Router.get("/:_id",async(req,res)=>{
    try {
        await ValidateRestrauntId(req.params);
        const {_id} = req.params;
        const foods = await FoodModel.find({restraunt: _id});
        return res.json({foods})
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})
//get food based on the particular category
Router.get("/r/:category",async(req,res)=>{
    try {
        await ValidateCategory(req.params);
        const {category} = req.params;
        const particularFood = await FoodModel.find({
            //regex to check for the substring
            //options to define the text is case insensitive
            category: {$regex: category, $options: "i"}
        })
        return res.json({particularFood});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})


export default Router;
