import React from 'react';

const CityName = ({ data }) => {
    return (
        <div className="weather">
          <div className="weather-location">
            <p>{data.city ? data.city.name : ''}</p>
          </div>
        </div>
    )
}

export default CityName;