import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import DeleteContact from './components/DeleteContact'
import axios from 'axios'
import namingService from './services/namingService'
import Notification from './components/Notification'
import './index.css';

const App = () => {
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setMatch(response.data)
      })
  }, [])
  const [newPerson, setNewPerson] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [match, setMatch] = useState<any>([]);
  const [selectedContact, setSelectedContact] = useState();
  const [errorMessage, setErrorMessage] = useState<string|null>(null);

  const handleLookup = (event: any) => {
    setNewSearch(event.target.value)
    setMatch(match.filter(people => people.name.includes(event.target.value)))
  }

  const handleContact = (event: any) => {
    setSelectedContact(event.target.value);
    console.log("delete event", event.target.value);
  }

  const handlePersons = (event: any) => {

    setNewPerson(event.target.value)
  }
  const handlePhone = (event: any) => {
    setNewPhone(event.target.value)
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const matches = match.filter(people => people.name === newPerson);
    const newID = (match.length + 1).toString();
    const addPerson = {name: newPerson, number: newPhone, id: newID}
    console.log(matches);

    if (!matches.length) {
    setMatch(match.concat([{name: newPerson, number: newPhone, id: newID}]));
    namingService.create(addPerson)
    .then(response => {
      setErrorMessage("Added new contact!")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      console.log("returned respose", response);
    })
    } else {
      if (confirm("Contact is already added. Would you like to update their phone number?") === true) {
      const personID = matches[0].id;
      console.log("personID", matches[0].id)
      setErrorMessage("Updated phone number")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      const updatePerson = {name: newPerson, number: newPhone, id: personID}
      namingService.update(personID, updatePerson)
      .then(response => {
        namingService.getAll()
        .then(response => {
          setMatch(response.data)
        })
        console.log("update", response);
      })}

    }
      
    }

    const handleDelete = (event: any ) => {
      console.log("delete data", selectedContact)
      event.preventDefault();
      namingService.deleteContact(selectedContact)
      .then(response => {
        console.log(match)
        setMatch(match.filter(people => people.id != selectedContact))
        console.log("deleted", response);
      })
      .catch(error => {
        setErrorMessage("Contact has already been deleted from the server!")
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  return (
    <div>
      <h2>Filter</h2>
      <Notification errorMessage={errorMessage} />
      <Filter newSearch={newSearch} handleLookup={handleLookup} />
      <h2>Add a new Contact:</h2>
      <PersonForm handleSubmit={handleSubmit} handlePhone={handlePhone} handlePersons={handlePersons} newPerson={newPerson} newPhone={newPhone} />
      <h2>Delete a Contact:</h2>
      <DeleteContact handleDelete={handleDelete} persons={match} handleContact={handleContact} />      
            <h2>Phonebook</h2>
      <Persons match={match} />
    


    </div>
  )
}

export default App