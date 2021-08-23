import React from 'react'

const CountryCard = ({name, capital, population, languages, flag}) => {

    const imgStyle = {
        height: '100px',
        width: '100px'
    }
    
    return (
        <div>
            <h1>{name}</h1>
            capital: {capital}
            <br/>
            population: {population}
            <h2>languages</h2>
            <ul>
                {languages.map((language, index) => <li key={index}>{language.name}</li>)}
            </ul>
            <img src={flag} alt="flag" style={imgStyle} />
        </div>
    )
}

export default CountryCard