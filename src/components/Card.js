import React from "react";
import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather, forecast }) => {
  if (loadingData) {
    return <Spinner />;
  }

  if (!showData) {
    return null;
  }

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day}/${month}/${year}`;

  const iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  const iconUrl3 = `http://openweathermap.org/img/w/${forecast.list[1].weather[0].icon}.png`;
  const iconUrl6 = `http://openweathermap.org/img/w/${forecast.list[2].weather[0].icon}.png`;
  const iconUrl9 = `http://openweathermap.org/img/w/${forecast.list[3].weather[0].icon}.png`;

  const forecastDate3 = `${forecast.list[1].dt_txt.substring(8, 10)}/${forecast.list[1].dt_txt.substring(5, 7)}/${forecast.list[1].dt_txt.substring(0, 4)} ${forecast.list[1].dt_txt.substring(11, 13)}`;
  const forecastDate6 = `${forecast.list[2].dt_txt.substring(8, 10)}/${forecast.list[2].dt_txt.substring(5, 7)}/${forecast.list[2].dt_txt.substring(0, 4)} ${forecast.list[2].dt_txt.substring(11, 13)}`;
  const forecastDate9 = `${forecast.list[3].dt_txt.substring(8, 10)}/${forecast.list[3].dt_txt.substring(5, 7)}/${forecast.list[3].dt_txt.substring(0, 4)} ${forecast.list[3].dt_txt.substring(11, 13)}`;

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">{weather.name}</h3>
                <p className="card-date">{date}</p>
                <h1 className="card-temp">
                  {(weather.main.temp - 273.15).toFixed(1)} ºC
                </h1>
                <p className="card-desc">
                  <img src={iconUrl} alt="icon" /> {weather.weather[0].description}
                </p>
                <img
                  src="https://images.unsplash.com/photo-1494768788897-7fdaa00de2a1?auto=format&fit=crop&q=80&w=1638&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid rounded-start"
                  alt="Background"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">
                    Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)} ºC
                  </h5>
                  <h5 className="card-text">
                    Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)} ºC
                  </h5>
                  <h5 className="card-text">
                    Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)} ºC
                  </h5>
                  <h5 className="card-text">
                    Humedad: {weather.main.humidity} %
                  </h5>
                  <h5 className="card-text">
                    Velocidad del viento: {weather.wind.speed} m/s
                  </h5>
                </div>
                <hr />
                <div className="row mt-4">
                  <div className="col">
                    <p> {forecastDate3}h</p>
                    <p className="description">
                      <img src={iconUrl3} alt="icon" /> {forecast.list[1].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)} ºC
                    </p>
                  </div>

                  <div className="col">
                    <p> {forecastDate6}h</p>
                    <p className="description">
                      <img src={iconUrl6} alt="icon" /> {forecast.list[2].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)} ºC
                    </p>
                  </div>

                  <div className="col">
                    <p> {forecastDate9}h</p>
                    <p className="description">
                      <img src={iconUrl9} alt="icon" /> {forecast.list[3].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[3].main.temp - 273.15).toFixed(1)} ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
