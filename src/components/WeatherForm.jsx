import { useState } from "react";
import "./weatherApp.css"

export default function WeatherForm({onChangeCity}){
    const [city, setCity] = useState("")

    function onChange(e){
        const value = e.target.value;

        if (value !== "") {
            setCity(value)
        }
    }
    function handleSubmit(e) {
        e.preventDefault();

onChangeCity(city)
    }
    return <div className="weatherSearchContainer">
        <form className="weatherForm" onSubmit={handleSubmit}>
        <input className="weatherInput" type="text" placeholder="City" onChange={onChange} />
    </form>
        </div>
}