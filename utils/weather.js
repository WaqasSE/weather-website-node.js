const request=require("request")

exports.getWeather=function(cityDetails){//cityDetails{lat,long,city}

const url=`https://api.darksky.net/forecast/0d286a0c15f9818afdd74fb9585094f9/${cityDetails.lat},${cityDetails.long}?units=si`

return new Promise((resolved,rejected)=>{
    request.get({url,json:true},(error,response)=>{
        /*no chances of error in that case
            because we this function will be passed
            valid long,lat always*/
        
        resolved({
            city:cityDetails.city,
            temperature:response.body.currently.temperature,
            precipPercentage:(response.body.currently.precipProbability*100).toPrecision(3),
            humidity:(response.body.currently.humidity*100).toPrecision(4),
            summary:response.body.hourly.summary
        })
        
    })        
 
})

}