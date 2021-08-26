import React from  'react'

const Entry = ({name, number, onClickDelete, id, buttonClassName}) => {

    const entryStyle = {
        marginBottom: '5px'
    }

    return (
        <li id={id} name={name} style={entryStyle}>{name} {number} <button className={buttonClassName} onClick={onClickDelete}>delete</button></li>
    )
}

export default Entry