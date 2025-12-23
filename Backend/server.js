const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDb=require("./config/db.js");
const Student=require("./models/Student.js");

dotenv.config();
connectDb();

const app=express();

app.use(express.json());
app.use(cors());

const stud=new Student({phone:"9325525258",email:"jayeshb@gmail.com",password:"Jayeshb@18"});
stud.save();


app.listen(5000,() =>{
    console.log("server is running..");
})