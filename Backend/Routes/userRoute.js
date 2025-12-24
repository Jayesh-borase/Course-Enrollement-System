const express=require("express");
const router=express.Router();
const {authMiddleware} =require("../middleware/authMiddleware.js");

router.get("/viewEnrollement",authMiddleware,(req,res) =>{
    res.status(200).json({message:"Validate"});
});

module.exports=router;
