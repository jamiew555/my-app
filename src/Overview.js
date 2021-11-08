import React, { useState } from "react";
import "./Overview-style.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";

export default function Overview(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "03eae50e408a5980bf3d11d9419f315f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="overview">
        <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="d-flex">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  id="city-input"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <span className="submit-btn">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </span>
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
