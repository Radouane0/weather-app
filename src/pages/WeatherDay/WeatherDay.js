import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './WeatherDay.scss';

const WeatherDay = () => {

  const params = useParams();
  const [data, setData] = useState({});

  const getDayOfWeek = (day) => {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const dayNumber = new Date(day).getDay();
    return days[dayNumber];
  }

  useEffect(() => {
    let weatherData = localStorage.getItem("weather");
    if (weatherData && weatherData !== '') {
      weatherData = JSON.parse(weatherData);
      const weatherDayData = weatherData.list.reduce((acc, curr) => {
        const day = curr.dt_txt.slice(0, 10);
        if (day === params.day) {
          acc.push(curr);
        }
        return acc;
      }, []);
      setData(weatherDayData);
    }
  }, [params.day]);
  
  return (
    <div id="weatherDay">
      {getDayOfWeek(params.day)}
      {/* <WeatherDayList data={data} /> */}
    </div>
  );
};

export default WeatherDay;

  