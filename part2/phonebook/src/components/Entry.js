import React from  'react'

const Entry = ({name, number, onClickDelete, id}) => {

    const entryStyle = {
        marginBottom: '5px'
    }

    return (
        <li id={id} name={name} style={entryStyle}>{name} {number} <button onClick={onClickDelete}>delete</button></li>
    )
}

export default Entry