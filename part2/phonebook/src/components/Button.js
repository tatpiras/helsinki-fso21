import React from 'react'

const Button = ({buttonType, buttonText}) => {
    return (
        <div>
          <button type={buttonType}>{buttonText}</button>
        </div>
    )
}

export default Button