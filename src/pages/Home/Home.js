import React, { useState } from 'react';
import SearchBar from './../../components/SearchBar/SearchBar';
import WeatherList from './../../components/WeatherList/WeatherList';
import CityName from './../../components/CityName/CityName';

import './Home.scss';

const Home = () => {
  const [data, setData] = useState({})

  return (
    <div id="home">
        <SearchBar setData = {setData}/>
        <CityName data={data}/>
        <WeatherList data={data} />
    </div>
  );
};

export default Home;


