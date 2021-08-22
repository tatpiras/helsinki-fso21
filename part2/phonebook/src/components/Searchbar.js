import React from 'react'
import Input from './Input'

const Searchbar = ({searchbarText, searchbarInputValue, searchbarInputOnchange}) => {
    return (
        <div>
            <Input inputName={searchbarText} inputValue={searchbarInputValue} inputOnchange={searchbarInputOnchange} />
        </div>
    )
}

export default Searchbar