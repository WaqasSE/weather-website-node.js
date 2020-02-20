
const locations=require("./../utils/locations")
const weather=require("./../utils/weather")
const errHanlder=require("../utils/errorHandler")

exports.getWeather=errHanlder(async(req,res)=>{
    if(!req.query.city)
        return res.status(400).json({
            status:"failed",
            message:"City not Provided"
        })
    let locationDetails=await locations.getLatLong(req.query.city)
    let weatherDeatils=await weather.getWeather(locationDetails)
    
    res.send({
        status:"success",
        data:weatherDeatils
    })
})