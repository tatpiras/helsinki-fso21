import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryCard = ({ name, capital, population, languages, flag }) => {

    const altText = `flag of ${name}`
    const apiKey = process.env.REACT_APP_WEATHERSTACK_KEY

    const [ currentWeather, setCurrentWeather ] = useState()
    const [ isLoading, setLoading ] = useState(true)

    let location = capital.includes('.') ? capital.replaceAll('.', '') : capital
    location = location.includes(',') ? location.replaceAll(',', '') : location

    let temperature;
    let weatherIcon;
    let weatherDescription;

    useEffect(() => {
        axios
        .get('http://api.weatherstack.com/current', {params: { access_key: apiKey, query: location, unit: 'm' }})
        .then(res => {
            setCurrentWeather(res.data)
            setLoading(false)
        })
    }, [ apiKey, location ])

    const imgStyle = {
        height: '100px',
        width: '100px'
    }

    const paragraphStyle = {
        margin: '0px'
    }

    if (isLoading) { return <div>Loading...</div> }
    
    if (!isLoading) {

        temperature = currentWeather.current.temperature
        weatherIcon = currentWeather.current.weather_icons[0]
        weatherDescription = currentWeather.current.weather_descriptions[0] 
    }

    return (
        <div>
            <h1>{name}</h1>
            capital: {capital}
            <br/>
            population: {population}
            <h2>Spoken languages</h2>
            <ul>
                {languages.map((language, index) => <li key={index}>{language.name}</li>)}
            </ul>
            <img src={flag} alt={altText} style={imgStyle} />
            <h2>Weather in {capital}</h2>
            <img src={weatherIcon} alt='weather icon' style={{ height: '20px', width: '20px' }}/>
            <p style={paragraphStyle}>temperature: {temperature} ° C</p>
            <p style={paragraphStyle}>{weatherDescription}</p>
            
        </div>
    )

}

export default CountryCard