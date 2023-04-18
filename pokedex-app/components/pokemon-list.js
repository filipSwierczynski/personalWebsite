import React from 'react'
import SinglePokemon from './single-pokemon'
const PokemonList = (props) => {
  const {results} = props;
  console.log(props);
  return (
    <div>
        <ul>
        {/* {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))} */}
      </ul>

    </div>
  )
}

export default PokemonList