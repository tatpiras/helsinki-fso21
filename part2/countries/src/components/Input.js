import React from 'react'

const Input = ({ inputName, inputValue, inputOnchange }) => {

    return (
        <div>
            {inputName} <input 
              value={inputValue} 
              onChange={inputOnchange}
          />
        </div>
    )
}

export default Input