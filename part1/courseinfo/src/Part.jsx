const Part = (props) => {   
    const {name, parts } = props.part;
    return (
        parts.map(value =>
        <p>{value.name} {value.exercises}</p>)
    )
}

export default Part;