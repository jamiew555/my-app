import React from "react";
import "./Weather-form-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weatherform() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="d-flex">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              id="city-input"
            />
          </div>
          <div className="col-3">
            <span className="submit-btn">
              <input type="submit" value="Search" className="btn btn-primary" />
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
