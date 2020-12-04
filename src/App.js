import logo from './logo.svg';
import './App.css';
import {cities} from './Cities.js';
import React,  {Component} from 'react'
import {useState} from 'react'
import Autocomplete from './Autocomplete';

  /* exlude getting geocaches
  const componentDidMount = () => { 
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res)
    return res.json()})
    .then(data => setUsers(data))

    console.log(users)

    const [geoPoints, setGeoPoints] = useState()
  const getGeoPoints = () => {
    fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q26040", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ec3117aec2mshee7aab20964ef78p1d89ebjsn5145d6c3660e",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
      }
    })
    .then(response => {
  
      return  response.json()
    })
    .then(data => setGeoPoints(data.data)
     
    
  )
    .catch(err => {
      
      console.error(err);
    });
    
  }
      let x
    getGeoPoints()
    while(geoPoints===null)
      if(geoPoints!=null)
        x = geoPoints.longitude.toString().substring(0,6)
    
      if(geoPoints!=null)
        x = geoPoints.longitude.toString().substring(0,6)
      console.log(x)
  }
  
  <div><button onClick={getGeoPoints}>getGeoPoints</button></div>
     {geoPoints!=null && <div>{geoPoints.longitude} {geoPoints.latitude}</div>}
     {geoPoints!=null && <div>
     <input type="text" onChange={getWeather} value={geoPoints.longitude.toString().substring(0,6)}></input>
     <input type="text" onChange={getWeather} value={geoPoints.latitude.toString().substring(0,6)}></input>
     </div>
     }
     {geoPoints!=null && <div><button onClick={getWeather}>Get Temperature in Sthlm</button></div>}
     
     <div>
     {weather!=null && weather.timeSeries[0].parameters.find(x => x.name === "t").values}
       </div>
       
  
  */

  
//sthlmQ1754

const weatherApplication = (props) => {

  /*const [weather, setWeather] = useState()
  const getWeather = () => {


   

        fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${geoPoints.longitude.toString().substring(0,6)}/lat/${geoPoints.latitude.toString().substring(0,6)}/data.json`)
          .then(res => {
     
            return res.json()})
  
  
            .then(data => setWeather(data))

            }
*/
  
  
  return (
    <div></div>
    )
}




function App() {
  
  
 

    




  
  return (
    <React.Fragment>

<div className="App">
      <Autocomplete
        options={cities.map(x=>x.city)}
      />
    </div>

    

     </React.Fragment>
  );
}

export default App;
