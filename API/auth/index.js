import express from "express";
// import usermodel
import { UserModel } from "../../database/user";
// import bcrypt
import bcrypt from "bcryptjs";
const Router = express.Router();

Router.post("/signup",async(req,res)=>{
    try {
        const {email, password, fullname, phonenumber} = req.body.credentials;
        const checkUserByEmail = await UserModel.findOne({email})
        const checkUserByPhoneNumber = await UserModel.findOne({phonenumber})
        //check if the user already exists
        if(checkUserByEmail || checkUserByPhoneNumber){
            return res.json({error: "User Alredy Exists !!"})
        }
        //hashing your password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password,bcryptSalt);

        //save to Database
        await UserModel.create({
            ...req.body.credentials,
            password:hashedPassword,
        });

        //JWT Token
        const token = jwt.sign({user:{fullname,email}},"ZomatoApp");

        //success message
        return res.status(200).json({token,status:"Success"});
    } catch (error) {
        return res.status(500).json({error:console.error(message)})
    }
})

