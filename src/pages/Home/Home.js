import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import WeatherList from './WeatherList/WeatherList';
import CityName from './CityName/CityName';

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

  return (
    <div id="home">
        <SearchBar setData = {setData}/>
        <CityName data={data}/>
        <WeatherList data={data} />
    </div>
  );
};

export default Home;


