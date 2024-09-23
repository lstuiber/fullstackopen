

const Persons = ({persons, match}) => {
    return (
<div>
    <div>{match.map(data => 
      <li>{data.name} {data.number}</li>
    )}</div>
    </div>
)}

export default Persons;