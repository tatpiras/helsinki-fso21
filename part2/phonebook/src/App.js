import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form'
import Entries from './components/Entries'
import Searchbar from './components/Searchbar'

const App = () => {

  const mainHeaderName = 'Phonebook'
  const numbersHeader = 'Numbers'
  const addNewEntryHeader = 'Add new'
  const searchbarText = 'Search any name'

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ people, setPeople ] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/people').then(response => {
        setPeople(response.data)
      })
  }, [])

  // EVENT HANDLERS ------------------------------------------------------------------------

  const entriesToShow = showAll
  ? people
  : people.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    if (event.target.value !== '') { setShowAll(false) }
    setNewSearch(event.target.value)
  }

  const nameIsEqual = (objName1, objName2) => {

    return objName1.toLowerCase() === objName2.toLowerCase()
  }

  const alreadyExists = (newName) => {
    for (let person of people) {
      if (nameIsEqual(person.name, newName)) {
        return true;
      }   
    }
  }

  const onSubmitAddEntry = (event) => {

    event.preventDefault()

    if (alreadyExists(newName)) { 
      alert(`${newName.toUpperCase()} is already added to phonebook`) 
      return
    }
    if (newName === '' || newNumber === '') { 
      alert(`Cannot add an incomplete entry. Please provide both a name and a number`) 
      return
    }
    else {

      const newEntry = {
        id: people.length + 1,
        name: newName,
        number: newNumber
      }
     
      setPeople(people.concat(newEntry));
      setNewName('')
      setNewNumber('')
    }
  }

    return (
      <>
        <Header headerName={mainHeaderName}/>
        <Header headerName={addNewEntryHeader}/>
        <Searchbar searchbarText={searchbarText} searchbarInputValue={newSearch} searchbarInputOnchange={handleSearchChange}/>
        <Form onsubmit={onSubmitAddEntry} 
              nameInputValue={newName} handleNameChange={handleNameChange} 
              numberInputValue={newNumber} handleNumberChange={handleNumberChange}  
              buttonType='submit' buttonText='add' />
        <Header headerName={numbersHeader}/>
        <Entries entriesToShow={entriesToShow}/>
      </>
    )

}

export default App