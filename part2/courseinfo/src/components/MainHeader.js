import React from 'react'

const MainHeader = ({mainHeaderName}) => {

    const mainHeaderStyle = {
        fontWeight: 'bold'
    }

    return (
        <h1 style={mainHeaderStyle}>{mainHeaderName}</h1>
    );
}

export default MainHeader