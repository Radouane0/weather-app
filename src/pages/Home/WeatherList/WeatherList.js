import React, { useMemo } from 'react';
import Weather from '../Weather/Weather';
import "./WeatherList.scss";

const WeatherList = ({ data }) => {

  // Regrouper par dates
  const weathers = useMemo(() => {
    if (!data.list) return [];

    return data.list.reduce((acc, curr) => {
      const day = curr.dt_txt.slice(0, 10);
      if (acc[day]) {
        acc[day].push(curr);
      } else {
        acc[day] = [curr];
      }
      return acc;
    }, {});
  
  }, [data]);

  return (
    <div id="weatherList">
      {
        Object.keys(weathers).map((w, index) => 
          <Weather 
            key={index}
            elts={weathers[w]}
          />
        ) 
      }
    </div>
  );
};

export default WeatherList;