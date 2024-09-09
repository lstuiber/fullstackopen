import { useState } from "react";

const points = [0, 0, 0, 0, 0, 0, 0, 0];
const copy = [...points]
const Anecdote = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]

      const onRandom = () => {
        const randomNum = Math.floor(Math.random()*(7 - 0 + 1) + 0);
        setSelected(randomNum);
        setCurrentVote(copy[randomNum]);
        console.log(copy)
        console.log(copy[selected])
        console.log(selected)
    }

    const [mostVotes, setMostVotes] = useState(0)
    const [popVote, setPopVote] = useState(0)
    const [currentVote, setCurrentVote] = useState(0)



    const onVote = (props) => {
        
    copy[props.target.value] += 1 
    console.log(copy[props.target.value])

    setCurrentVote(copy[props.target.value]);
    copy.forEach(checkVotes)

    }

    function checkVotes(votes, anecdote) {
        if (votes > mostVotes) {
            setMostVotes(votes);
            setPopVote(anecdotes[anecdote]);
        }
    }
    
      const [selected, setSelected] = useState(0)
return (
    <>
            <div>
            {anecdotes[selected]}
            <br/>
            <div>Has {currentVote} votes.</div>
            <br/>
        <button onClick={onVote} value={selected}>Vote</button>
      <button onClick={onRandom} value="anecdote">Next Anecdote</button>

      <br/><br/>
      <div>Popular Vote with {mostVotes} votes</div>
        <div>{popVote}</div>
      </div>

    </>
)
}

export default Anecdote;