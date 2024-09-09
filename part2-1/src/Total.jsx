const Total = (props) => {
    console.log(props);
    const totals = props.total.parts.map(items => items.exercises);
    console.log(totals);
    const totalNumber = totals.reduce((total, current) =>
    total + current, 0);
    return (
        <div>Total: {totalNumber}
        </div>
    )
}

export default Total;