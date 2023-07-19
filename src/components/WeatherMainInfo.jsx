import "./weatherApp.css"
export default function WeatherMainInfo({ weather }) {
  return (
    <div className="weatherCity">
      <div className="weatherCityName">{weather?.location.name}</div>
      <div className="weatherRegionName">{weather?.location.region}</div>
      <div className="weatherCountryName">{weather?.location.country}</div>
      <div className="weatherGeneralInfo">
        <div className="weatherTemp">
        <div>{weather?.current.temp_c}°</div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div>
          <div className="weatherCurrentCondition">{weather?.current.condition.text}</div>
          
        </div>
      </div>

    </div>
  );
}
