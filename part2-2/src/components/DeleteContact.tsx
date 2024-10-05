
const DeleteContact = ({handleDelete, handleContact, persons}) => {
const contacts = persons.map(people => 
    <option value={people.id}>{people.name}</option>
)

    return (
<form onSubmit={handleDelete} onChange={handleContact}>
<div>
  <label for="contacts">Select a Contact:</label>
  <select id="contacts" name="contacts">
  {contacts}
  </select>
</div>
<div>
  <button type="submit" >Delete</button>
</div>
</form>
    )
}

export default DeleteContact;