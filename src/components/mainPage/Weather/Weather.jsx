/* eslint-disable */
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../../../Stylings/mainPage.css'

function Weather(props) {
    const {wether, setWether} = props;
    const [data, setData] = useState({});
    const [location,setLocation] = useState('')
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
 
    const [loading, setLoading] = useState(true);
    const APIkey = "a4b9cf56236de1f7087a9c7a5e4e29ef"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`
    const urlLongLat = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a4b9cf56236de1f7087a9c7a5e4e29ef`
    var x = 0;
    useEffect(() => {
        //only allowed to make 60 calls a min
        //Grabs temperature based on host current location
        if(latitude !== '' && longitude !== "" && location === '' && wether < 1){
           
        axios.get(urlLongLat)
        .then((response) => {
          //On sucsessfull call
          setData(response.data)
          setWether(wether++)
          

        })
        .catch(function (error) {
            setWether(wether++)
        })
    }
      console.log("In here")
      }, [latitude, longitude])
  
      useEffect(() => {
          //Grabs users current location
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          });
        }
        
    
      })
  
      //other compoenets from data
      //data?.main?.feels_like feels like in kelvin
      //data?.main?.humidity Humidity
      //Math.round(data?.wind?.speed * 3.6) Wind speed in killometers per hour
      //Descreption


  return (
    <div className='weather-container'>
        {data?.name !== undefined ? 
        <>
      <p style={{fontSize: "22px"}}><b style={{fontSize: "24px", fontWeight: "700"}}>Location: </b> {data?.name}</p>
      
      <p style={{fontSize: "22px"}}> <b style={{fontSize: "24px", fontWeight: "700"}}>Temp: </b> {Math.round(data?.main?.temp - 273.15) } °C</p>

      <p style={{fontSize: "22px"}}><b style={{fontSize: "24px", fontWeight: "700"}}>Descreption: </b>{data?.weather[0]?.main}</p>
      </>
      :
      null}
    </div>
  )
}

export default Weather
