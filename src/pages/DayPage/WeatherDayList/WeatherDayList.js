import React from 'react';
import WeatherDay from '../WeatherDay/WeatherDay';

const WeatherDayList = ({ data }) => {
    console.log(data)
    return (
        <div>
            {
                data.map((w, index) => 
                    <WeatherDay 
                        key={index}
                        elt={w}
                    />
                ) 
            }  
        </div>
    );
};

export default WeatherDayList;