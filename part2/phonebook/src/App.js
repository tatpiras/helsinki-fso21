import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Entries from './components/Entries'

const App = () => {

  const mainHeaderName = 'Phonebook'
  const numbersHeader = 'Numbers'

  const [ people, setPeople ] = useState(
    [
      {  id: 1,
         name: 'Arto Hellas',
      },
    ]
  ) 

  const [ newName, setNewName ] = useState('Add a new name')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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

  const addName = (event) => {

    event.preventDefault()

    if (alreadyExists(newName)) { alert(`${newName.toUpperCase()} is already added to phonebook`) }
    else {
      const newEntry = {
        id: people.length + 1,
        name: newName,
      }
     
      setPeople(people.concat(newEntry));
      setNewName('Add a new name')
    }
  }

  console.log(people)

  return (
    <>
      <Header headerName={mainHeaderName}/>
      <Form buttonType='submit' buttonText='add' onchange={handleNameChange} inputValue={newName} onsubmit={addName}/>
      <Header headerName={numbersHeader}/>
      <Entries people={people}/>
    </>
  )
}

export default App