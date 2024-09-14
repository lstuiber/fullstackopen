const Total = ({parts}) => {
    console.log("total", parts);
    const totals = parts.map(items => items.exercises);
    const totalNumber = totals.reduce((total, current) =>
    total + current, 0);
    return (
        <div>Total: {totalNumber}
        </div>
    )
}

export default Total;