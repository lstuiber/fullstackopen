const Part = ({name, num}) => {
    console.log("part", name);
    return (
        <div>
           {name} {num}
        </div>
    )
}

export default Part;