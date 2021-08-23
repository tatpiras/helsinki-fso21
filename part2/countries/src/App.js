import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Searchbar from './components/Searchbar'
import CountryContainer from './components/CountryContainer';

const App = () => {

  const searchbarText = 'find countries'
  const [ countries, setCountries] = useState({})
  const [ newSearch, setNewSearch ] = useState('')
  const [ selectedCountry, setSelectedCountry ] = useState({country: 'none'})

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
    resetSelectedCountry()
  }

  const handleSelectedCountry = (event) => {

    let dataName = event.target.parentElement.getAttribute("dataname")
    let country = countries.find(country => country.name === dataName);
    setSelectedCountry({country: country})
  }

  const resetSelectedCountry = () => {
    setSelectedCountry({country: 'none'})
  }

  // RENDERING -----------------------------------------------------------------------------

  return (
    <>
      <Searchbar searchbarText={searchbarText} searchbarInputValue={newSearch} searchbarInputOnchange={handleSearchChange} />
      <CountryContainer countries={countriesToShow} selectedCountry={selectedCountry} handleSelectedCountry={handleSelectedCountry} />
    </>
  );
  
};

export default App
