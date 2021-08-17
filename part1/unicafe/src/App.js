import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)

  const updateGoodStat = () => {
    setGood(good + 1)
    setAvg(avg + 1)
  }
 
  const updateNeutralStat = () => setNeutral(neutral + 1)

  const updateBadStat = () => {
    setBad(bad + 1)
    setAvg(avg - 1)
  }

  return (
    <>
      <Header headerName='give feedback' />
    
      <Button onclick={updateGoodStat} text='good'/> 
      <Button onclick={updateNeutralStat} text='neutral'/> 
      <Button onclick={updateBadStat} text='bad'/> 
  
      <Header headerName='statistics'/>

      <Statistics good={good} neutral={neutral} bad={bad} avg={avg}/>
    </>
  )
}

// COMPONENTS ---------------------------

const Header = ({headerName}) => {

    return (
      <div>
        <h1>
          {headerName}
        </h1>
      </div>
    );
  }

  const Button = ({onclick, text}) => {

    const buttonStyle = {
      backgroundColor: 'white', 
      borderRadius: '5px', 
      borderColor: '#d3d3d3'
    }

    return (
      <button onClick={onclick} style={buttonStyle}>{text}</button>
    );
  }

const Statistics = ({good, neutral, bad, avg}) => {

  const tot = good + neutral + bad 

  const average = () => {
    if (avg === 0) {
      return 0;
    }
    return (avg / tot).toFixed(1)
  }

  const positive = () => {
    if (good === 0) {
      return 0
    }
    return ((good * 100) / tot).toFixed(1) + " %"
  }

  if (tot === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={tot} />
          <StatisticLine text='average' value={average()} />
          <StatisticLine text='positive' value={positive()} />
        </tbody>
      </table>
    </div>
  );
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

export default App