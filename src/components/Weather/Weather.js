import React from 'react';
import './Weather.scss'

const Weather = ({ elt }) => {
    return (
        <div className="weather">
            <div className='block-1 center'>
                <img 
                    src={`https://openweathermap.org/img/wn/${elt.weather[0].icon}@2x.png`}
                    alt={elt.weather[0].description}
                />
            </div>
            <div className='block-2 center'>
                <div>{`${Math.round(elt.main.temp)} °C `}</div>
                <div>{elt.main.humidity}</div>
            </div>
        </div>
    );
};

export default Weather;