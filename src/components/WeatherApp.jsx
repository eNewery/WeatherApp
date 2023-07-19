import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import "./weatherApp.css"
export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

useEffect(() => {
  loadInfo()
}, [])

useEffect(() => {
  document.title =  `Weather | ${weather?.location.name}`
}, [weather])


  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
    `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      setWeather(json)
    } catch (error) {}
  }
  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }
  return (
    <div className="app-container">
      <WeatherForm onChangeCity={handleChangeCity} />
      <div className="weatherContainer">
      <WeatherMainInfo weather={weather}/>

      </div>
    </div>
  );
}
