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

    const invalidInputText = <p className='invalid_pokemon_name'>Invalid Pokemon Number</p>;

  return (
    <div className='search_container'>
      
        <form onSubmit={handleFormSubmit} method="post">
            <label htmlFor="pokemonName">Name or Number</label>
            <br/>
            <input id="pokemonName" type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} name="pokemonName" />
            <button type='submit' value="search">Search</button>
        </form>
        {invalidInput ?  invalidInputText : ""  } 
    </div>
  )
}

export default SearchPokemon