import React, { useState, useEffect } from 'react'
import numberService from './services/phoneNumbers'
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
  const [ isLoading, setLoading ] = useState(true)

  useEffect(() => {
    numberService
      .getAll()
      .then(allNumbers => {
        setPeople(allNumbers)
        setLoading(false)
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
      if (nameIsEqual(person.name.trim(), newName.trim())) {
        return true;
      }   
    }
  }

  const onSubmitAddEntry = (event) => {

    event.preventDefault()

    if (alreadyExists(newName) && newNumber !== '') { 

      const confirmUpdate = window.confirm(`${newName.toUpperCase().trim()} is already in phonebook. Replace number with new one?`)
      if (confirmUpdate) {

        const personToUpdate = people.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const idToUpdate = personToUpdate.id

        const updatedPerson = { ...personToUpdate, number: newNumber }
      
        numberService
          .update(idToUpdate, updatedPerson)
          .then(updated => {
            setPeople(people.map(person => person.id !== idToUpdate ? person : updated))
        })

        return

      } else { 
          setNewName('')
          setNewNumber('')
          return 
        }
    }
    else if (newName === '' || newNumber === '') { 
      alert(`Cannot add an incomplete entry. Please provide both a name and a number`)
      return
    }
    else {

      const newEntry = {
        id: people.length + 1,
        name: newName,
        number: newNumber
      }
     
      numberService
        .create(newEntry)
        .then(returnedNumber => {
          setPeople(people.concat(returnedNumber));
          setNewName('')
          setNewNumber('')
        })
      }
  } 

  const onClickDelete = (event) => {
    
    const personName = event.target.parentElement.getAttribute("name");

    const confirmDelete = window.confirm(`Delete ${personName.toUpperCase()} from phonebook?`)
    
    if (confirmDelete) {

      const personId = event.target.parentElement.getAttribute("id");
      numberService
        .deleteOne(personId)
        .catch(error => console.log('Something went wrong DELETING item: ', error))

      setPeople(people.filter(person => person.id !== +personId))
    }
  }

  // RENDERING -------------------------------------------------------------------

  if (isLoading) { return (<div>Loading...</div>)}

  return (
    <>
      <Header headerName={mainHeaderName}/>
      <Searchbar searchbarText={searchbarText} searchbarInputValue={newSearch} searchbarInputOnchange={handleSearchChange}/>
      <Header headerName={addNewEntryHeader}/>
      <Form onsubmit={onSubmitAddEntry} 
            nameInputValue={newName} 
            handleNameChange={handleNameChange} 
            numberInputValue={newNumber} 
            handleNumberChange={handleNumberChange}  
            buttonType='submit' 
            buttonText='add' />
      <Header headerName={numbersHeader}/>
      <Entries entriesToShow={entriesToShow} onClickDelete={onClickDelete} />
    </>
  )

}

export default App