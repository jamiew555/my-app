import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-9">
          <div className="float-left">
            <h1 id="city">{props.data.city} </h1>
          </div>
        </div>
        <h1>
          <FormattedDate date={props.data.date} />
        </h1>

        <hr />
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="weatherIcon">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
