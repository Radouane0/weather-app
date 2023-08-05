import React, { useState } from 'react';
import "./SearchBar.scss";

const SearchBar = ({ getWeather }) => {
  const [location, setLocation] = useState('')

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      getWeather(location);
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