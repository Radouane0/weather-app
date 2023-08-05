import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import WeatherList from './WeatherList/WeatherList';
import CityName from './CityName/CityName';
import axios from 'axios';

import './Home.scss';

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    let weatherData = localStorage.getItem("weather");
    if (weatherData && weatherData !== '') {
      weatherData = JSON.parse(weatherData);
      setData(weatherData);
    }
  }, []);

  const getWeather = (location) => {
    setData({})
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=fr&appid=d8c4fc4492eda4421e39db791d83f82e&units=metric`;
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      localStorage.setItem("weather", JSON.stringify(response.data));
    }).catch((error) => {
      console.error('Error fetching data', error)
    })
  }

  return (
    <div id="home">
        <SearchBar getWeather={getWeather}/>
        <CityName data={data} getWeather={getWeather}/>
        <WeatherList data={data} />
    </div>
  );
};

export default Home;


