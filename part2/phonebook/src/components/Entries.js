import React from 'react'
import Name from './Name'

const Entries = ({people}) => {

    const allPeople = people.map(person => 
        <Name key={person.id} name={person.name}/>
    );

    return (
        <div>
            <ul style={{listStyleType: 'none', padding: '0'}}>
                {allPeople}
            </ul>
        </div>
    )
}

export default Entries