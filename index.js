import express from "express";
import cors from "cors";
import helmet from "helmet";
const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());


zomato.get('/', (req,res) => res.json({message:"SetUp Successful!!"}))

zomato.listen(4000, ()=>console.log("Server is Up and Running"))