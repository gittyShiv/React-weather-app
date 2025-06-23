import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState( {
        cityName: "Delhi",
        description: "overcast clouds",
        feelsLike: 42.02,
        humidity: 56,
        icon: "04d",
        temp: 35.02,
        tempMax: 35.02,
        tempMin: 35.02
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}