import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              id="search-input"
              placeholder="Type a city..."
              autoFocus="on"
              className="form-control shadow-sm border-0 mb-3"
              autoComplete="off"
              required
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className=" btn btn-warning form-control"
            />
          </div>
          <div className="col-2">
            <input
              type="button"
              id="current-location"
              value="Local"
              className="btn btn-warning form-control"
            />
          </div>
        </div>
      </form>
      <hr />
    </div>
  );
}
