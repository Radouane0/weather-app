import React from 'react';
import '../index.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Weather App</h1>
            <ul className="header-nav">
                    <li>ACCUEIL</li>
                    <li>FAVORIS</li>
            </ul> 
        </div>
    );
};

export default Header;