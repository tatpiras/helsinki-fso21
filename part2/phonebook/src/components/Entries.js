import React from 'react'
import Entry from './Entry'

const Entries = ({ entriesToShow }) => {

    if (entriesToShow.length === 0) {
        return (
            <p>No matching contacts.</p>
        );
    }

    /*
    const allPeople = people.map(person => 
        <Entry key={person.id} name={person.name} number={person.number}/>
    );

    return (
        <div>
            <ul style={{listStyleType: 'none', padding: '0'}}>
                {allPeople}
            </ul>
        </div>
    )
    */
   
    return (
        <div>
        <ul style={{listStyleType: 'none', padding: '0'}}>
            {entriesToShow.map(person => 
                <Entry key={person.id} name={person.name} number={person.number}/>
            )}
        </ul>
    </div>
    )
}

export default Entries