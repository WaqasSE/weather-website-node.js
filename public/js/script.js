
const weatherBtn=document.getElementById('wSubmit')
const detailsList=document.getElementById('wDataList')
    
    
weatherBtn.addEventListener('click',event=>{
    event.preventDefault()
    detailsList.innerHTML=""
    let cityName=document.getElementById('cityName')
    
    if(!cityName.value)
        alert("City Not Specified")
    else{
        detailsList.innerHTML='<li class="lead">Loading...</li>'
        detailsList.style.display="block"
        fetch(`http://localhost:3000/api?city=${cityName.value}`)
        .then((data)=>{
            data.json().then((weatherDetails)=>{
                updateWithResult(weatherDetails)
            })
        })
    }
})

function updateWithResult(weatherDetails){
    let innerHtml
    detailsList.innerHTML=""
    if(weatherDetails.status=="success"){
        innerHtml='<li class="lead">%city%</li><li class="lead">%temperature%&#x2103;</li><li class="lead">Precipaitation %precipPercentage%%</li><li class="lead">Humidity %humidity%%</li><li class="lead">%summary%</li>'
        innerHtml=innerHtml.replace('%city%',weatherDetails.data.city)
        innerHtml=innerHtml.replace("%temperature%",weatherDetails.data.temperature)
        innerHtml=innerHtml.replace("%precipPercentage%",weatherDetails.data.precipPercentage)
        innerHtml=innerHtml.replace("%humidity%",weatherDetails.data.humidity)
        innerHtml=innerHtml.replace("%summary%",weatherDetails.data.summary)
    }
    else{
        innerHtml='<li class="lead">Error: %errorMessage%</li>'
        innerHtml=innerHtml.replace("%errorMessage%",weatherDetails.message)
    }
    
    
    detailsList.insertAdjacentHTML('afterbegin',innerHtml)

}