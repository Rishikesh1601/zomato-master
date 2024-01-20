import mongoose from "mongoose";

const RestrauntSchema = new mongoose.Schema({
    name: {type:String, required:true},
    city: {type:String, required:true},
    address: {type:String, required:true},
    mapLocation: {type:String, required:true},
    cuisine: [String],
    restrauntTimings: {type:String},
    contactNumber: {type:Number},
    website: {type:String},
    popularDishes: [String],
    averageCost: {type:Number},
    amenities: [String],
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    menu: {
        type: mongoose.Types.ObjectId,
        ref: "Menus"
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Reviews"
    }],
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }
    
},
{
    timestamps:true
})

export const RestrauntModel = mongoose.model("Restraunts", RestrauntSchema);