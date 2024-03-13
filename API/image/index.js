import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
import { s3Upload } from "../../utility/AWS/s3";
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

//configure multer
const storage = multer.memoryStorage();
const upload = multer({storage});


//post the images
Router.post("/",upload.single("file"),async(req,res)=>{
    try {
        const file = req.file;
        const bucketOptions = {
            Bucket : "zomatomasterbucket",
            Key : file.originalname,
            Body: file.buffer,
            contentType: file.mimetype,
            ACL: "public-read"
        };
        const uploadImage = await s3Upload(bucketOptions);
        return res.status(200).json({uploadImage});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})


export default Router;