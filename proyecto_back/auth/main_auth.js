 
 const jwt =require("jsonwebtoken")
 const auth =(req,res,next)=>{
    try{
        const token =req.header.autoriztion.split("")[1]
        const decode=jwt.verify(token,"__recret__")
        req.usuario=decode
        next()
    }catch(error){
        res.status(401)
        res.json({code:4,msg:"no tiene autorizacion para ver este conteneido"})
    }
 }
 module.exports=auth