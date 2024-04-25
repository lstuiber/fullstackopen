
//want to pass all props at once; may need to destructure object intead
export default function Stats(props) {
    return (
    <div>
    <h2>Statistics</h2>
    <h4>Good: {props.good}</h4>
    <h4>Neutral: {props.neutral}</h4>
    <h4>Bad: {props.bad}</h4>
    <h4>All: {props.all}</h4>
    <h4>Average: {props.average}</h4>
    <h4>Positive: {props.positive*100}%</h4>
  </div>
    )
}