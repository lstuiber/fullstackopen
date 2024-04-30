import StatisticLine from "./StatisticLine"


export default function Stats(props) {
    const positive = props.positive*100+"%";
    return (
    <>
    <h2>Statistics</h2>
    <table>
    <tbody>
    <StatisticLine name="good" value={props.good} />
    <StatisticLine name="neutral" value={props.neutral} />
    <StatisticLine name="bad" value={props.bad} />
    <StatisticLine name="All" value={props.all} />
    <StatisticLine name="average" value={props.average} />
    <StatisticLine name="positive" value={positive} />
    </tbody>
    </table>

  </>
    )
}