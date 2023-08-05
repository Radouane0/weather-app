import React from 'react';
import { CiTempHigh } from 'react-icons/ci'
import { GiWaterDrop } from 'react-icons/gi'

import "./WeatherDay.scss";

const WeatherDay = ({elt}) => {
    return (
        <div className='block-3 center'>
            <h5>{elt.dt_txt.slice(11, 13)}H</h5>
            <img 
                src={`https://openweathermap.org/img/wn/${elt.weather[0].icon}@2x.png`}
                alt={elt.weather[0].description}
            />
            <p><CiTempHigh className='temp-icon-p2'/>{`${Math.round(elt.main.temp)} °C `}</p>
            <p><GiWaterDrop className='humidity-icon-p2'/>{elt.main.humidity}%</p>
            
        </div>
    );
};

export default WeatherDay;