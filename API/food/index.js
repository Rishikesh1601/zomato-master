import express from "express";

import { FoodModel } from "../../database/allModels";

const Router = express.Router();
//get food
Router.get("/:_id",async(req,res)=>{
    try {
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
        const {category} = req.params;
        const particularFood = await FoodModel.find({
            category: {$regex: category, $options: "i"}
        })
        return res.json({particularFood});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})
