
module.exports=errorHandler=fn=>{
    return (req,res,next)=>{
        fn(req,res)
        .catch((error)=>{
            res.json({
                status:"failed",
                message:error
            })
        })
    }
}