import React from 'react';
import { useParams } from 'react-router-dom';

import './WeatherDay.scss';

const WeatherDay = () => {

  const params = useParams();

  const getDayOfWeek = (day) => {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const dayNumber = new Date(day).getDay();
    return days[dayNumber];
  }
  
  return (
    <div id="weatherDay">
      {getDayOfWeek(params.day)}
    </div>
  );
};

export default WeatherDay;

  