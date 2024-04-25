const Hello = (props) => {
  return (
    <div><p>Hello {props.name}, you are {props.age} years old.</p></div>
  )
}


const App = () => {
  const name = "lucas";
  const age = 20;
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name="Lucas" age={28 + 1} />
      <Hello name={name} age={age} />

    </div>
  )
}

export default App