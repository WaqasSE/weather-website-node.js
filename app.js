const express=require("express")
const cors=require("cors")
const weatherController=require("./controllers/weatherController")


const app=express()

//configuring the application
app.use(cors())

//ROUTING

    //URL FORMAT: api?city=xyz
app.get('/api',weatherController.getWeather)//it is very obvious there will be only one type of request to our little api




app.listen(3000,()=>{
    console.log("Application started...")
})