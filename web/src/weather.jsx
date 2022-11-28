import React from 'react'
import axios from "axios"
import './weather.css'
import { useState,useEffect } from 'react'



const Weather = () => {
    
    const [weatherData, setWeatherData] = useState([])
    // const [city, setCity] = useState("")

    useEffect(() => {

    const submitHandler = (e) => {
        // e.preventDefault();

        axios.get(`https://eager-bass-parka.cyclic.app`)
        .then(response => {
          console.log("response: ", response.data);
          console.log("I am click handler")

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })

    }
    submitHandler()
},[]);
  return (
<>


  <nav className='nav-bar'>
        <h1>Weather Forcast</h1>
    </nav>
    <div className="body_padding_div">
    


        <form className="formm">
            <input type="text" id='city' placeholder="Enter your city name" />
             {/* <button type="submit">Get Weather</button>  */}
        </form>
        <div className="main_container">
          
      
      


        </div>
  
    <div id="forcastDiv" className="forcastDiv"> 
        <div className="forcastCard">
            <div className="tempC">{Math.round(weatherData?.temp_c)}°C</div>
        <div id="time">{new Date().toDateString()}</div>
        <div className="day">Humidity: {weatherData.humidity}%</div>
            <div className="min">Min : {weatherData.max_temp_c}°C</div>
            <div className="max">Max: {weatherData.min_temp_c}°C</div>
        </div> 


    </div> 
    </div> 
</>

  )
  }

export default Weather
