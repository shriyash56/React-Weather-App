import './App.css';
import {useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import CityInput from "./components/CityInput"
import CityWeather from "./components/CityWeather"
function App() {
  const [city ,setcity]=useState("")
  const [weather,setweather]=useState("")
  const fetching=(city)=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`)
      .then(response=>response.json())
        .then(data=>setweather(data));
  }
  console.log(weather)
  return (
    <div className="App">
      <CityInput city={city} setcity={setcity} fetching={fetching}/>
      <CityWeather weather={weather}/>
    </div>
  );
}

export default App;