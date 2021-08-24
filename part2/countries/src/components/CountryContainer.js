import React from 'react'
import CountryCard from './CountryCard'

const CountryContainer = ({ countries, selectedCountry, handleSelectedCountry }) => {

  if (countries.length > 10) {

    return (
      <p>Too many matches, specify another filter</p>
    )
  } 
  
  if (countries.length === 1 && selectedCountry.country === "none") {

      const country = countries[0]

      return (
        <CountryCard name={country.name} 
                     capital={country.capital} 
                     population={country.population} 
                     languages={country.languages} 
                     flag={country.flag} />
      )
  }
  
  if (selectedCountry.country !== "none") {

      return (
          <CountryCard name={selectedCountry.country.name} 
                       capital={selectedCountry.country.capital} 
                       population={selectedCountry.country.population} 
                       languages={selectedCountry.country.languages} 
                       flag={selectedCountry.country.flag} />
      )
  }  

  return (
      <ul style={{padding: '0', listStyleType: 'none'}}>
          {countries.map((country, index) => 
              <li key={index} dataname={country.name} style={{marginBottom: '3px'}}>{country.name}
              <button onClick={handleSelectedCountry} style={{marginLeft: '5px'}}>show more</button></li>)
          }
      </ul>
  )
  
}

export default CountryContainer