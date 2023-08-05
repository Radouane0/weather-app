import React from 'react';
import { CiTempHigh } from 'react-icons/ci';
import { GiWaterDrop } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import './Weather.scss';

const Weather = ({ elts }) => {

    const navigate = useNavigate();
    const weatherMorning = elts.find(elt => elt.dt_txt.slice(11, 19) === "09:00:00");
    const weatherAfternoon = elts.find(elt => elt.dt_txt.slice(11, 19) === "18:00:00");
    
    const getDayOfWeek = (day) => {
        const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        const dayNumber = new Date(day).getDay();
        return days[dayNumber];
    }

    const handleClick = (day) => {
        navigate('/weather-day/' + day)
    }

    if (weatherMorning && weatherAfternoon) {
        return (
            <div className="weather" onClick={() => handleClick(weatherMorning.dt_txt.slice(0, 10))}>
                <div className='block-1 center'>{getDayOfWeek(weatherMorning.dt_txt.slice(0, 10))}</div>

                <div className='block-2 center-row'>
                    <div className='block-2-1 center'>
                        <h5>Matin</h5>
                        <img 
                            src={`https://openweathermap.org/img/wn/${weatherMorning.weather[0].icon}@2x.png`}
                            alt={weatherMorning.weather[0].description}
                        />
                        <p><CiTempHigh className='temp-icon'/>{`${Math.round(weatherMorning.main.temp)} °C `}</p>
                        <p><GiWaterDrop className='humidity-icon'/>{weatherMorning.main.humidity}%</p>
                    </div>

                    <div className='block-2-2 center'>
                        <h5>Après-midi</h5>
                        <img 
                            src={`https://openweathermap.org/img/wn/${weatherAfternoon.weather[0].icon}@2x.png`}
                            alt={weatherAfternoon.weather[0].description}
                        />
                        <p><CiTempHigh className='temp-icon'/>{`${Math.round(weatherAfternoon.main.temp)} °C `}</p>
                        <p><GiWaterDrop className='humidity-icon'/>{weatherAfternoon.main.humidity}%</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Weather;