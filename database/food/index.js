import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name : {type:String, required:true},
    descript: {type:String, required:true},
    isVeg: {type:Boolean, required:true},
    isContainsEgg: {type:Boolean, required:true},
    category: {type:String, required:true},
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images" //we are taking these values from the images schema we created
    },
    price: {type:Number, required:true},
    addOns: [{
        type: mongoose.Types.ObjectId,
        ref: "Foods" //we are taking this value from the food schema which is this only so this is called as self reference
    }],
    restraunts: {
        type: mongoose.Types.ObjectId,
        ref: "restraunts", //we are taking this from the restraunt page
        required: true
    },
},
{   
    timestamps: true  //this is for the noting of the time when the order will be placed

})

export const FoodModel = mongoose.model("Foods", FoodSchema);