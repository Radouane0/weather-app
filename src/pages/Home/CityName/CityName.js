import React from 'react';
import './CityName.scss';

const CityName = ({ data }) => {
    return (
          <div id="cityName">
            <p>{data.city ? data.city.name : ''}</p>
          </div>
    )
}

export default CityName;