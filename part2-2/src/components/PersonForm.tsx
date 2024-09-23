
const PersonForm = ({handleSubmit, handlePersons, handlePhone, newPerson, newPhone}) => {
    return (
<form onSubmit={handleSubmit}>
<div>
  name: <input name="name" value={newPerson} onChange={handlePersons}/>
  phone: <input name="number" value={newPhone} onChange={handlePhone}/>
</div>
<div>
  <button type="submit" >add</button>
</div>
</form>
    )
}

export default PersonForm;