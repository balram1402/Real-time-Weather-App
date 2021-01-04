
import React,{useState,useEffect} from 'react';
import './App.css';

export default function App(){
  const[city,setcity] = useState(null);
  const[search,setsearch] = useState(null);

  useEffect(() => {
    const fetch_api = async() =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=aa04acd19f85d7d35cb4d4a6449ac6d4&units=metric`
      const response = await fetch(url)
      const respjson = await response.json();
      
      setcity(respjson.main);
    }
    fetch_api();
  },[search])

  return(
    <>
    <center>
      <h2>Real time Weather Application!</h2><br/>
      <input type = "text" placeholder = "Enter City Name" onChange = {(event) => {setsearch (event.target.value)}}/>
      <br/>
      {search}
      {!city ? (<p>No Data found!</p>) : 
      (<div>
        Temperature - {city.temp} Deg Cel.<br/>
       Humidity - {city.humidity}%
      </div>)}
      

      </center>
    </>
  )
}