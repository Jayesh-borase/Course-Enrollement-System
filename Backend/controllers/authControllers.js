const Student=require("../models/Student.js");
const bcrypt=require("bcryptjs");
const generateToken=require("../utils/generateToken.js");

const signup=async (req,res) =>{
    const {phone,email,password,confirmPassword}=req.body;

    try{

        if(!phone || !email || !password || !confirmPassword)
        {
          return  res.status(400).json({message:"All fields are required"});
        }

        if(phone.length!=10)
        {
           return res.status(400).json({message:"invalid Phone number"});
        }

        if(password!=confirmPassword)
        {
           return res.status(400).json({message:"password and confirmPassword does not match"});
        }
       

      const phoneExists = await Student.findOne({ phone });
      if (phoneExists) {
      return res.status(400).json({ message: "Student already exists" });
     }

    const emailExists = await Student.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }



        const hashPassword=await bcrypt.hash(password,10);

        const newStudent=new Student({
            phone:phone,
            email:email,
            password:hashPassword
        });

        await newStudent.save();

        res.status(201).json({
            message:"New student created",
            _id:newStudent._id,
            phone:newStudent.phone,
            email:newStudent.email,
        });

    }catch(e)
    {
        console.log("error",e);
       return res.status(500).json({message:"Server Error"});
    }
};

const login=async (req,res) =>{
    const {phone,password}=req.body;

    try{

        if(!phone || !password)
        {
            return res.status(400).json({message:"All fields is require"});
        }

        const stud=await Student.findOne({phone});

        if(!stud)
        {
            return res.status(400).json({message:"user not found"});
        }

        const isMatch=await bcrypt.compare(password,stud.password);

        if(!isMatch)
        {
            return res.status(400).json({message:"Wrong password"});
        }

        return res.status(200).json(
            {
                message:"Login successfully.",
                phone:stud.phone,
                token:generateToken(stud),
            });

    }catch(e)
    {
        console.log("error",e);
        return res.status(500).json({message:"Server Error"});
    }
}

module.exports={signup,login};