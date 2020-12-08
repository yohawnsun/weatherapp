import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {cities} from './Cities.js';
import {weathersymbols} from './weathersymbols';
import moment from "moment";
import {useState} from 'react'

const GetCityItem =(props) =>{
    const [weather, setWeather] = useState()
       

    const WeatherApplication = (event) => {

      //  console.log(cities.find(x => x.city ===event.target.value.toString()).Longitude)
       // console.log(cities.find(x => x.city ===event.target.value.toString()).Latitude)
        
      

        let long = cities.find(x => x.city ===event.target.value.toString()).Longitude.substring(0,6)
        let lat = cities.find(x => x.city ===event.target.value.toString()).Latitude.substring(0,6)
        
      
      
      
         
      
              fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`)
                .then(res => {
           
                  return res.json()})
        
        
                  .then(data => setWeather(data))
      
                  }
      
        console.log(weather)
/*
 <table>
        {weather.timeSeries!=null && weather.timeSeries.map(x => <tr><td>{x.parameters.find(x => x.name === "t").values}</td></tr> )}
        </table>
           {weather!=null &&  'Current temp: ' + weather.timeSeries[0].parameters.find(x => x.name === "t").values}
            <input type="submit" style={{color:'transparent'}} value="" className="search-btn" onClick={WeatherApplication} value={props.userinput}/>
       
*/
    return(
        <React.Fragment>
               <button class="btn btn-dark buttonsearch" onClick={WeatherApplication} value={props.userinput}>Search</button>
       
       <br/>
       <div className="outputTemp form-control" style={{backgroundColor:'white'}}> 
       {weather!=null && weather.timeSeries.map(x=> <React.Fragment><span>{moment(x.validTime).format("dddd")} ({moment(x.validTime).format("HH")}) {x.parameters.map(y => y.name==="t" && "Temp:"+ y.values +" ")} 
    {x.parameters.map(y => y.name==="Wsymb2" && weathersymbols[y.values])}</span><br/></React.Fragment>)}
    
       </div>
       </React.Fragment>
    )
}






export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };

  onChange = (e) => {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-box form-control"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          
          <GetCityItem userinput={userInput}/>
          </div>
        {optionList}
        
      </React.Fragment>
    );
  }
}

export default Autocomplete;
