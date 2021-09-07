import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = ({ onsubmit, 
                nameInputValue, 
                handleNameChange, 
                numberInputValue, 
                handleNumberChange, 
                buttonType, 
                buttonText,
                buttonClassName }) => {
    return (
        <form onSubmit={onsubmit}>
          <Input inputName='name' inputValue={nameInputValue} inputOnchange={handleNameChange}/>
          <Input inputName='number' inputValue={numberInputValue} inputOnchange={handleNumberChange}/>
          <Button type={buttonType} buttonText={buttonText} buttonClassName={buttonClassName}/>
      </form>
    )
}

export default Form