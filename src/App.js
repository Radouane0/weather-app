import './index.css';
import React, { useState } from 'react';
import axios from 'axios'
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=fr&appid=d8c4fc4492eda4421e39db791d83f82e&units=metric`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar
        setData = {setData}
        location = {location}
        setLocation = {setLocation}
        searchLocation = {searchLocation}
        />
        <div className="weather">
          <div className="weather-location">
            <p>{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


