import React from 'react';

const Header = ({headerName}) => {

  const headerStyle = {
    fontWeight: 'bold'
  }

  return (
    <h2 style={headerStyle}>{headerName}</h2>
  )
}

export default Header