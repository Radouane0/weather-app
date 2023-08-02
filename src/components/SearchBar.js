import React from 'react';

const SearchBar = ({ setData, location, setLocation, searchLocation}) => {

    return (
        <div className="search">
          <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Entrer la ville'
          type='text'/>
        </div>
    );
};

export default SearchBar;