import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '555-555-5555'
    }
  ]) 
  const [newPerson, setNewPerson] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [match, setMatch] = useState(persons);

  const handleLookup = (event: any) => {
    setNewSearch(event.target.value)
    setMatch(persons.filter(people => people.name.includes(event.target.value)))
  }

  const handlePersons = (event: any) => {

    setNewPerson(event.target.value)
  }
  const handlePhone = (event: any) => {
    setNewPhone(event.target.value)
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const match = persons.filter(people => people.name === newPerson);
    if (!match.length) {
    setPersons(persons.concat([{name: newPerson, number: newPhone}]));
    setMatch(persons.concat([{name: newPerson, number: newPhone}]));
    } else {
      alert(`${newPerson} is already taken!`)
    }
      
    }
  return (
    <div>
      <h2>Filter</h2>
      <Filter newSearch={newSearch} handleLookup={handleLookup} />
      <h2>Add a new Contact:</h2>
      <PersonForm handleSubmit={handleSubmit} handlePhone={handlePhone} handlePersons={handlePersons} newPerson={newPerson} newPhone={newPhone} />
            <h2>Phonebook</h2>
      <Persons  persons={persons} match={match} />
    


    </div>
  )
}

export default App