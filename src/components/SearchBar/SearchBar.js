import React, { useState } from 'react';
import axios from 'axios'
import "./SearchBar.scss";

const SearchBar = ({ setData }) => {
  const [location, setLocation] = useState('')

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=fr&appid=d8c4fc4492eda4421e39db791d83f82e&units=metric`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      }).catch((error) => {
        console.error('Error fetching data', error)
      })
      setLocation('')
    }
  }

  return (
    <div id="searchBar">
      <input 
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyDown={searchLocation}
      placeholder='Entrer la ville...'
      type='text'/>
    </div>
  );
};

export default SearchBar;