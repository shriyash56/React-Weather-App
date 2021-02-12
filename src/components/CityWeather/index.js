import React from 'react'

export default function CityWeather({weather}) {
    return (
        <div>
        <p>name:{weather?.name}</p>
        <p>temperature:{weather?.main?.temp}</p>
        <p>humidity:{weather?.main?.humidity}</p>
        <p>pressure:{weather?.main?.pressure}</p>
        </div>
    )
}