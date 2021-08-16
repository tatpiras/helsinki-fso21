import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGoodStat = () => {
    setGood(good + 1)
  }

  const updateNeutralStat = () => {
    setNeutral(neutral + 1)
  }

  const updateBadStat = () => {
    setBad(bad + 1)
  }

  const buttonStyle = {
    backgroundColor: "white", 
    borderRadius: "5px", 
    borderColor: "#d3d3d3"
  }

  return (
    <>
      <Header headerName={'give feedback'} />
    
      <button onClick={updateGoodStat} style={buttonStyle}>good</button> 
      <button onClick={updateNeutralStat} style={buttonStyle}>neutral</button>
      <button onClick={updateBadStat} style={buttonStyle}>bad</button>
  
      <Header headerName={'statistics'}/>

      <StatsHistory goodCounter={good} neutralCounter={neutral} badCounter={bad}/>

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

const StatsHistory = ({goodCounter, neutralCounter, badCounter}) => {

  const ulStyle = {
    margin: "0",
    padding: "0"
  };

  const liStyle = {
    listStyleType: "none"
  };

  return (
    <div>
      <ul style={ulStyle}>
        <li style={liStyle}>good {goodCounter}</li> 
        <li style={liStyle}>neutral {neutralCounter}</li> 
        <li style={liStyle}>bad {badCounter}</li> 
      </ul>
    </div>
  );
}

export default App