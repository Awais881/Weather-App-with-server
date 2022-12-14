import React from 'react'
import axios from "axios"
import './weather.css'
import { useState } from 'react'

let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
    baseUrl = `http://localhost:5001`;
}

const Weather = () => {
    
    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState("")

  

    const submitHandler = (e) => {
        e.preventDefault();

        axios.get(`${baseUrl}/weather/${cityName}`)
        .then(response => {
          console.log("response: ", response.data);
          console.log("I am click handler")

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })

    
  
}
  return (
<>


  <nav className='nav-bar'>
        <h1>Weather Forcast</h1>
    </nav>
    <div className="body_padding_div">
    


        <form className="formm" onSubmit={submitHandler}>
            <input type="text" id='city' 
            placeholder="Enter your city name" 
            onChange={(e) => { setCityName(e.target.value)}}
            
            />
            
        </form>
               
        </div> 
      
        {(weatherData === null) ? null :
          <div>
             <div className='center'>
            <div className="temp">{Math.round(weatherData?.temp_c)}°C</div>
        </div>
        
     
       <div id="forcastDiv" className="forcastDiv"> 
        <div className="forcastCard">
        <div className="city"><h3>{weatherData.city}</h3></div> <br />
      <div className='flex'>
        <div className='left'>
          <div className="time">{new Date().toDateString()}</div>

          <div className="day">Humidity: {weatherData.humidity}%</div>
          </div>
          <div className='right'>
            <div className="min">Min : {weatherData.max_temp_c}°C</div> 
            <div className="max">Max: {weatherData.min_temp_c}°C</div>
            </div>
            </div> 
        </div> 
        </div> 

    </div> 
}
        
</>
)
}


export default Weather
