const request=require("request")

exports.getLatLong=function(city){
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibS13YXFhcyIsImEiOiJjazZydjl0bHYwN3UzM2dwOTJiYXNhbHcyIn0.1cwlRTF_ylAhPjnEQoNjEg&limit=1`
    
    return new Promise((resolved,rejected)=>{

        request.get({url,json:true},(error,response)=>{
            if(error)
                rejected("Something went wrong")
            else if(response.body.features.length==0)
                rejected("Invalid City Provided")
            else{
                const long=response.body.features[0].center[0]
                const lat=response.body.features[0].center[1]
                const city=response.body.features[0].place_name
        
                resolved({
                    lat,
                    long,
                    city
                })
            }
            
                
        })
    })
    
}