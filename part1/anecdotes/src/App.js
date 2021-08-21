import React, { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  /*
  const [votes, setVotes] = useState({
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0
  })
  */

  const [selectedAnecdote, setSelected] = useState(0)

  const generateRandomIndex = (n) => {

    let newRandomIndex;

    do { newRandomIndex = Math.floor(Math.random() * n); } 
    while(newRandomIndex === selectedAnecdote)
   
    return newRandomIndex;

  }

  const generateNextAnecdote = () => {

    const anecdotesLength = [...anecdotes].length;
    let nextIndex = generateRandomIndex(anecdotesLength)
    setSelected(nextIndex);
  }

  const vote = () => {

    const votesArrayCopy = [...votes]
    votesArrayCopy[selectedAnecdote] += 1
    setVotes(votesArrayCopy);

  }

  const highestVote = Math.max(...votes)
  const highestVoteIndex = votes.indexOf(highestVote)
  const mostVotedAnecdote = anecdotes[highestVoteIndex]

  return (
    <div>
      <Header headerText='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selectedAnecdote]} votes={votes[selectedAnecdote]}/>
      <Button onclick={vote} text='vote'/>
      <Button onclick={generateNextAnecdote} text="next anecdote" />
      <Header headerText='Anecdote with most votes'/>
      <Anecdote anecdote={mostVotedAnecdote} votes={highestVote}/>
    </div>
  )
}

// COMPONENTS ------------------------------------------------------------------------------------------

const Anecdote = ({anecdote, votes}) => {
  return (
    <div>
      <p>" {anecdote} "</p>
      <p>has {votes} votes</p>
    </div>
  );
}

const Button = ({onclick, text}) => {

  return (
    <button onClick={onclick}>{text}</button>
  );
}

const Header = ({headerText}) => {
  return (
      <h1>{headerText}</h1>
  );
}

export default App