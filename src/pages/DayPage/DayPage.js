import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './DayPage.scss';

const DayPage = () => {

  const params = useParams();
  const [data, setData] = useState({});
  const [daysData, setDaysData] = useState([{}]);

  const getDayOfWeek = (day) => {
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const dayNumber = new Date(day).getDay();
    return days[dayNumber];
  }

  useEffect(() => {
    let weatherData = localStorage.getItem("weather");
    if (weatherData && weatherData !== '') {
      weatherData = JSON.parse(weatherData);
      setData(weatherData);

      // Récupération des météos de la journée params.day
      const weatherDayData = weatherData.list.reduce((acc, curr) => {
        const day = curr.dt_txt.slice(0, 10);
        if (day === params.day) {
          acc.push(curr);
        }
        return acc;
      }, []);
      setDaysData(weatherDayData);
    }
  }, [params.day]);

  console.log(data)
  
  if (data.city) {
    return (
      <div id="dayPage">
        <p>{getDayOfWeek(params.day)}</p>
        <p>{data.city.name}</p>
        {/* <WeatherDayList data={daysData} /> */}
      </div>
    );
  }
};

export default DayPage;

  