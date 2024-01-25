import { useState } from 'react'

const App = () => {
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
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(new Array(anecdotes.length).fill(0))
  const [highestVotes, setHighestVotes] = useState(0)

  const renderRandomAncedote = () =>{
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }
  
  const calculateHighestVote = () =>{
    let maxIndex = 0
    let maxVotes = 0
    for(let i = 0; i < allVotes.length; i++){
      if(allVotes[i] > maxVotes){
        maxVotes = allVotes[i]
        maxIndex = i
      }
    }
    setHighestVotes(maxIndex)
  }

  const votefn = () => {
    console.log('Hello from the vote function')
    let copy = [...allVotes]
    copy[selected] += 1
    setAllVotes(copy)
    calculateHighestVote()
  }

  return (
    <div>
      <h1>Ancedote of the Day</h1>
      {anecdotes[selected]}
      <br/>
      <button onClick={votefn}>
        vote
      </button>
      <button onClick={renderRandomAncedote}>
        next ancedote
      </button>
      <h1>Ancedote with most votes</h1>
      {anecdotes[highestVotes]}
    </div>
  )
}

export default App