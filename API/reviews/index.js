import express from "express";

import { ReviewModel, UserModel } from "../../database/allModels";

const Router = express.Router();

//post a review
Router.post("/new",async(req,res)=>{
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);
        return res.json({review: "succesfully created review"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

//delete a review
Router.delete("/delete/:_id",async(req,res)=>{
    try {
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({revie:"deleted successfully!"});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


export default Router;
