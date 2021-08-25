import React from 'react'

const Input = ({inputName, inputValue, inputOnchange}) => {

    return (
        <div>
            {inputName}: <input 
              style={{marginBottom: '5px'}}
              value={inputValue} 
              onChange={inputOnchange}
          />
        </div>
    )
}

export default Input