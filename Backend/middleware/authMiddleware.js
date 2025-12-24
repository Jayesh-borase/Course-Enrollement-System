const jwt=require("jsonwebtoken");

const authMiddleware=(req,res,next) =>{

    const token=req.header("Authorization" || "authorization");

    if(!token)
    {
        return res.status(401).json({message:"Acess denied !! No token provided."});
    }

    try{

        const decode=jwt.verify(token,process.env.JWT_SECRET);

        req.user=decode;
        next();

    }catch(e)
    {
        return res.status(400).json({message:"Invalid Token"});
    }
}

module.exports={authMiddleware};