import React from 'react'
import Button from './Button'

const Form = ({buttonType, buttonText, onchange, inputValue, onsubmit}) => {
    return (
        <form onSubmit={onsubmit}>
        <div>
          name: <input 
                    value={inputValue} 
                    onChange={onchange}
                />
        </div>
        <Button type={buttonType} buttonText={buttonText}/>
      </form>
    )
}

export default Form