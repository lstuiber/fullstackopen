const Total = (total) => {
    let addNum =0;
    const total = total.map(value => 
        addNum = addNum + value.exercises);
    return (
        
<p>Number of exercises {addNum}</p>
    )
}

export default Total;