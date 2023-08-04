import React from 'react';
import Weather from '../Weather/Weather';
import "./WeatherList.scss";

const WeatherList = ({ data }) => {
  if (data.list) {
    return (
      <div id="weatherList">
        {
          data.list.map((elt, index) => 
            <Weather 
              key={index}
              elt={elt}
            />
          ) 
        }
      </div>
    );
  }
};

export default WeatherList;