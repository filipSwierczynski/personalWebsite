import React from 'react'
import { useEffect, useState } from 'react';
const SearchPokemon = (props) => {
    const [inputValue,setInputValue] = useState('');
  const [invalidInput,setInvalidInput] = useState(false);

    function handleFormSubmit(e){
        e.preventDefault();

        
        setInputValue('');

        if((inputValue > 1008 || inputValue < 1)){
          setInvalidInput(!invalidInput);
        } else {
          setInvalidInput(false);
          props.onSearch(inputValue.toLowerCase());

        }
    }

    const invalidInputText = <p>Invalid Pokemon Number</p>;

  return (
    <div>
      {invalidInput ?  invalidInputText : ""  } 
        <form onSubmit={handleFormSubmit} method="post">
            <label htmlFor="pokemonName"></label>
            <input placeholder="Enter Pokemon's name or pokedex index" id="pokemonName" type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} name="pokemonName" />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchPokemon