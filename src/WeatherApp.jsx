import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city:"pune",
        feelsLike:24.32,
        temp:22,
        tempMin:21.23,
        tempMax:23.23,
        humidity:45,
        weather:"haze",
    });

    let updateInfo = (newinfo)=>{
         setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        
        </div>
    );
}