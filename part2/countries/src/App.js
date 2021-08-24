import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Searchbar from './components/Searchbar'
import CountryContainer from './components/CountryContainer';

const App = () => {

  const searchbarText = 'find countries'
  const [ countries, setCountries] = useState({})
  const [ newSearch, setNewSearch ] = useState('')
  const [ selectedCountry, setSelectedCountry ] = useState({country: 'none'})
  const [ isLoading, setLoading ] = useState(true)

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountries(res.data)
        setLoading(false)
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
    setSelectedCountry({...selectedCountry, country: country})
  }

  const resetSelectedCountry = () => {
    setSelectedCountry({...selectedCountry, country: 'none'})
  }

  // RENDERING -----------------------------------------------------------------------------

  if (isLoading) { return <div>Loading...</div> }

  return (
    <>
      <Searchbar searchbarText={searchbarText} 
                 searchbarInputValue={newSearch} 
                searchbarInputOnchange={handleSearchChange} />
      <CountryContainer countries={countriesToShow} 
                        selectedCountry={selectedCountry} 
                        handleSelectedCountry={handleSelectedCountry}
                        setSelectedCountry={setSelectedCountry} />
    </>
  );
  
};

export default App
