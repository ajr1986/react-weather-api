import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({weather}) => {

    let weatherComponent = null;
    
    if(Object.getOwnPropertyNames(weather).length > 0){

        const kelvin = 273.15;
        let {name, main} = weather;
        
        weatherComponent = (
            <div className="card-panel white col s12">
                <div className="black-text">
                    <h2>El clima de {name} es:</h2>
                    <p className="temperatura">
                        { parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                    </p>
                    <p>Máxima: { parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                    <p>Mínima: { parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
                </div>
            </div>
        );
    }

    return (
        weatherComponent
    );
};

Weather.propTypes = {
    weather: PropTypes.object
};

export default Weather;