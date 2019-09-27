import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect(() => {

    const getWeather = async () => {

      const appId = '9c04b60a5b709982d774eb77a084d1be';
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
      const response = await fetch(url);
      const weather = await response.json();
  
      setWeather(weather);
  
    }

    if(city === '' || country === '') return;

    getWeather();

  }, [city, country]);

  const dataSearch = data => {
    
    if(data.city === '' || data.country === ''){

      setError(true);
      return;
    }

    setError(false);
    setCity(data.city);
    setCountry(data.country);
  }

  let errorComponent = null;
  let weatherComponent = null;

  if(error){
    errorComponent = <Error message="Ambos campos son requeridos" />;
  } else if(weather.cod === "404") {
    let message = `No se encontró ${city} para el pais seleccionado`;
    errorComponent = <Error message={message} />;
  } else {
    weatherComponent = <Weather weather={weather} />;
  }

  return (
    <div className="App">
    
      <Header title="WeatherApp"/> 

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              {errorComponent}
              <Form 
                  dataSearch={dataSearch}
              />
            </div>
            <div className="col s12 m6">
              {weatherComponent}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
