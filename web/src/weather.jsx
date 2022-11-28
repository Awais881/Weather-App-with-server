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

        console.log("I am click handler")
        axios.get(`https://eager-bass-parka.cyclic.app/weather`)
            .then(response => {
                console.log("response: ", response.data);

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


</>

  )
  }

export default Weather