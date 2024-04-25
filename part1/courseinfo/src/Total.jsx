const Total = (props) => {
    let addNum =0;
    const total = props.total.map(value => 
        addNum = addNum + value.exercises);
    return (
        
<p>Number of exercises {addNum}</p>
    )
}

export default Total;