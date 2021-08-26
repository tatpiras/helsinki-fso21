import React from 'react'

const Button = ({ buttonType, buttonText, buttonClassName }) => {
    return (
        <div>
          <button className={buttonClassName} type={buttonType}>{buttonText}</button>
        </div>
    )
}

export default Button