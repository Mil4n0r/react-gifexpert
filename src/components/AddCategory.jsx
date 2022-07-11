import { PropTypes } from 'prop-types';
import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({target:{value}}) => {
    setInputValue(value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue)
    if(inputValue.trim().length <= 1) {
      console.log("OOO")
      return;
    }
    setInputValue('');
    onNewCategory( inputValue.trim() );
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) } aria-label="form">
      <input
        type="text" 
        placeholder='Buscar gifs'
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}