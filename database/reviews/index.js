import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: {type:mongoose.Types.ObjectId, ref: "Foods"},
    restaurant: {type:mongoose.Types.ObjectId, ref: "Restraunts"},
    user: {type:mongoose.Types.ObjectId, ref: "Users"},
    rating: {type: Number, required:true},
    reviewText: {type: String},
    isRestrauntReview: {type:Boolean},
    isFoodReview: {type:Boolean},
    photos: [{
        type:mongoose.Types.ObjectId,
        ref: "Images"
    }]
},
{
    timestamps:true
})

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);