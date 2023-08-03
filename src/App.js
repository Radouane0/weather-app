import './index.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherList from './components/WeatherList/WeatherList';
import CityName from './components/CityName/CityName';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState({})


  return (
    <div>
      <NavBar />
      <div className="bg-main">
        <SearchBar setData = {setData}/>
        <WeatherList data={data} />
        <CityName data={data}/>
      {/*<div className="weather-temp">
            <p>{data.list ? `${Math.round(data.list[0].main.temp)} °C `: ''}</p>
            <p></p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;


