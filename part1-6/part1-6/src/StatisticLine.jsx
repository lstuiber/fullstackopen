export default function StatisticLine(props) {
    return (
        <tr>
        <td>{props.name}:</td><td>{props.value}</td>
        </tr>
    )
}