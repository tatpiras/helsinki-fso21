import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Searchbar from './components/Searchbar'
import CountryCard from './components/CountryCard';

const App = () => {

  const searchbarText = 'find countries'

  const [ countries, setCountries] = useState([])
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  // EVENT HANDLERS ------------------------------------------------------------------------

  const countriesToShow = newSearch !== '' 
  ? countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))
  : []

  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    if (event.target.value !== '') { setNewSearch(event.target.value) }

  }

 const CountriesContainer = ({countries}) => {

    if (countries.length > 10) {
      return (
        <p>Too many matches, specify another filter</p>
      )
    } else if (countries.length === 1) {

        const country = countries[0]

        return (
          <CountryCard name={country.name} capital={country.capital} population={country.population} 
                       languages={country.languages} flag={country.flag} />
        )
      } else {
        return (
          <ul style={{padding: '0', listStyleType: 'none'}}>
            {
              countries.map((country, index) => <li key={index}>{country.name}</li>)
            }
          </ul>
        )
      }
  }

  // RENDERING -----------------------------------------------------------------------------

  return (
    <>
      <Searchbar searchbarText={searchbarText} searchbarInputValue={newSearch} searchbarInputOnchange={handleSearchChange} />
      <CountriesContainer countries={countriesToShow}/>
    </>
  );
  
};

export default App
