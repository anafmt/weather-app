import React from "react";
import "./CityInfo.css";

export default function CityInfo(props) {
  return (
    <div className="CityInfo">
      <div className="row">
        <div className="col-3">
          <img src="./sunny.png" alt="" />
          <span className="line">
            <h6>
              <strong className="temperature">{props.temperature}</strong>
              <small className="units"> °C </small>
            </h6>
          </span>
        </div>
        <div className="col-5">
          <span className="line">
            <h3>{props.city}</h3>
            <div className="col-12">{props.date}</div>
          </span>
        </div>
        <div className="col-3">
          <span className="line">
            <ul>
              <li>
                <div>{props.description}</div>
                <div>
                  Humidity:
                  {props.humidity}%
                </div>
              </li>
              <li>
                <div>
                  Wind:
                  {props.wind}
                  Km/h
                </div>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
