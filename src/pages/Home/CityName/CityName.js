import React from 'react';
import './CityName.scss';
import { HiOutlineRefresh } from 'react-icons/hi'

const CityName = ({ data, getWeather }) => {

  const handleRefresh = () => {
    if (data.city) {
      getWeather(data.city.name);
    }
  }

  return (
        <div id="cityName">
          <p>{data.city ? data.city.name : ''}</p>
          <HiOutlineRefresh className='refresh' onClick={handleRefresh}/>
        </div>
  )
}

export default CityName;