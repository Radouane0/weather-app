import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import WeatherDayList from './WeatherDayList/WeatherDayList';
import { HiOutlineRefresh } from 'react-icons/hi';
import { capitalizeFirstLetter } from '../../utils/string'

import './DayPage.scss';

const DayPage = () => {

  const params = useParams();
  const [data, setData] = useState({});
  const [daysData, setDaysData] = useState([{}]);

  const getDayOfWeek = (day) => {
    const dayString = new Date(day).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    return capitalizeFirstLetter(dayString);
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

  const getWeather = (location) => {
    setData({})
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=fr&appid=d8c4fc4492eda4421e39db791d83f82e&units=metric`;
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      localStorage.setItem("weather", JSON.stringify(response.data));
    }).catch((error) => {
      console.error('Error fetching data', error)
    })
  }

  const handleRefresh = () => {
    if (data.city) {
      getWeather(data.city.name);
    }
  }
  
  if (data.city) {
    return (
      <div id="dayPage">
        <p className='city'>{data.city.name} <HiOutlineRefresh className='refresh' onClick={handleRefresh}/></p>
        <p className='day'>{getDayOfWeek(params.day)}</p>
        <WeatherDayList data={daysData}/>
      </div>
    );
  }
};

export default DayPage;

  