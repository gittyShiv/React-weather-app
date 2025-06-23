import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let API_URL = "https://api.openweathermap.org/data/2.5/weather"; //?q={city name}&appid={API key}
    const API_KEY = "c183af0fd14dfe8b45e26dde4bc33dad";

    let getWeatherInfo=async()=>{
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await res.json();
        console.log(data);

        let result = {
            cityName: data.name,
            feelsLike : data.main.feels_like,
            temp:data.main.temp,
            tempMin:data.main.temp_min,
            tempMax:data.main.temp_max,
            humidity:data.main.humidity,
            description : data.weather[0].description,
            icon : data.weather[0].icon
        }
        console.log(result);
        return result;
    }
    let handleCityInput=(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit= async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }    
    return (
        <div className='search-box'>
            <h1>Search for the weather</h1>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city-name" label="City name" variant="outlined" value={city} onChange={handleCityInput}/>
                <Button variant="contained" 
                type='submit'
                endIcon={<SearchIcon />} 
                style={{height:"54px",marginLeft:"10px"}}>
                    Search
                </Button>
            </form>
        </div>
    )
}