const mongoose=require("mongoose");

const studSchema=mongoose.Schema({

    phone:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["admin","stud"],
        default:"stud",
    },
});

module.exports=mongoose.model("Student",studSchema);
