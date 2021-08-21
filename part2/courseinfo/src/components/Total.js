import React from 'react'; 

const Total = ({total}) => {

  const totalStyle = {
    fontWeight: 'bold'
  }

  return(
    <p style={totalStyle}>total of {total} exercises</p>
  ) 
}

export default Total