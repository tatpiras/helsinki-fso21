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

  const addName = (event) => {
    event.preventDefault()

    const newEntry = {
      id: people.length + 1,
      name: newName,
    }

    setPeople(people.concat(newEntry));
    setNewName('Add a new name')
  }

  console.log('people after ', people);

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