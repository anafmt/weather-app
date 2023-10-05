import "./App.css";
import Search from "./Search";
import CityInfo from "./CityInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <h1>Weather Application</h1>
            <div className="card">
              <div className="card-body">
                <CityInfo
                  city="Luxembourg"
                  date="Friday, 22 September 11:32"
                  temperature={23}
                  description="Sunny"
                  humidity={18}
                  wind={21}
                />
                <br />
                <br />
                <Search />
                <br />
              </div>
            </div>
          </div>
          <br />
          <small>
            <a
              className="git-hub-link"
              href="https://github.com/anafmt/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code{" "}
            </a>
            by Ana FM Tavares
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
