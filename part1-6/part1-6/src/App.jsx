import { useEffect } from 'react'
import { useState } from 'react'
import Stats from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [total, setTotal] = useState(0)




  const onHandle = (event) => {
    const newAll = all + 1;
    setAll(newAll);
    if (event.target.value === "good") {
      const newGood = good + 1
      console.log(newGood);
      setGood(newGood);

      const newTotal = total + 1;
      setTotal(newTotal)
      console.log(total);
      setAverage(newTotal/newAll);
      setPositive(newGood/newAll);
      
    }
    else if (event.target.value === "neutral") {
      const newNeutral = neutral + 1
      setNeutral(newNeutral);
      console.log(total)
      setAverage(total/newAll);
      setPositive(good/newAll);
      
      
    }
    else {
      const newBad= bad + 1
      setBad(newBad)
      
      const newTotal = total - 1;
      setTotal(newTotal)
      console.log(total);
      setAverage(newTotal/newAll);
      setPositive(good/newAll);
    }

  }



  console.log(selected);

if (all < 1) {
  return (
  <div>

  <h1>Give Feedback</h1>
  <button onClick={onHandle} value="good">Good</button>
  <button onClick={onHandle} value="neutral">Neutral</button>
  <button onClick={onHandle} value="bad">Bad</button>
  <h3>No Feedback Yet!</h3>
  </div>
  )
}

  return (
    <>
    <div>


      </div>
      <div>


      <h1>Give Feedback</h1>
      <button onClick={onHandle} value="good">Good</button>
      <button onClick={onHandle} value="neutral">Neutral</button>
      <button onClick={onHandle} value="bad">Bad</button>
      <Stats good={good} neutral={neutral} bad={bad} average={average} positive={positive} all={all} />
    </div>
    </>
  )
}

export default App;