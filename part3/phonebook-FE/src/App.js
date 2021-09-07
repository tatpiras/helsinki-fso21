import React, { useState, useEffect } from 'react'
import numberService from './services/phoneNumbers'
import Header from './components/Header'
import Form from './components/Form'
import Entries from './components/Entries'
import Searchbar from './components/Searchbar'
import Notification from './components/Notification'
import './index.css'

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
  const [ notification, setNotification ] = useState({ message: null, type: null })

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
            setNotification({ message: `${newName.toUpperCase()}'s number updated!`, type: 'update' })
          })
          .catch(error => {
            console.log(error)
            setNotification({ message: error.response.data.error, type: 'delete'})
            setTimeout(() => {
              setNotification({ message: null,  type: null })
              window.location.reload()
            }, 2500)
          })

        setTimeout(() => {
          setNotification({ message: null,  type: null })
          window.location.reload()
        }, 2500)

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
        name: newName,
        number: newNumber
      }

      numberService
        .create(newEntry)
        .then(returnedNumber => {
          setPeople(people.concat(returnedNumber))
          setNewName('')
          setNewNumber('')
          setNotification({ message: `${newEntry.name.toUpperCase()} added to phonebook!`, type: 'add' })
        })
        .catch(error => {
          setNotification({ message: error.response.data.error, type: 'delete' })
          console.log(error.response.data);
      })

      setTimeout(() => {
        setNotification({ message: null,  type: null })
      }, 2500)
    }
  } 

  const onClickDelete = (event) => {
    
    const personName = event.target.parentElement.getAttribute("name");

    const confirmDelete = window.confirm(`Delete ${personName.toUpperCase()} from phonebook?`)
    
    if (confirmDelete) {

      const personId = event.target.parentElement.getAttribute("id");
      numberService
        .deleteOne(personId)
        .then(
          setNotification({ message: `${personName.toUpperCase()} deleted from phonebook!`, type: 'delete' })
        )
        .catch(error => console.log('Something went wrong DELETING item: ', error))

      setTimeout(() => {
        setNotification({ message: null,  type: null })
        window.location.reload()
      }, 2500)

      setPeople(people.filter(person => person.id !== +personId))
    }
  }

  // RENDERING -------------------------------------------------------------------

  if (isLoading) { return (<div>Loading...</div>)}

  return (
    <div className="app">
      <Notification message={notification.message} type={notification.type}/>
      <Header headerName={mainHeaderName}/>
      <Searchbar searchbarText={searchbarText} searchbarInputValue={newSearch} searchbarInputOnchange={handleSearchChange}/>
      <Header headerName={addNewEntryHeader}/>
      <Form onsubmit={onSubmitAddEntry} 
            nameInputValue={newName} 
            handleNameChange={handleNameChange} 
            numberInputValue={newNumber} 
            handleNumberChange={handleNumberChange}  
            buttonType='submit' 
            buttonText='add' 
            buttonClassName='addButton'/>
      <Header headerName={numbersHeader}/>
      <Entries entriesToShow={entriesToShow} onClickDelete={onClickDelete} buttonClassName='deleteButton' />
    </div>
  )

}

export default App