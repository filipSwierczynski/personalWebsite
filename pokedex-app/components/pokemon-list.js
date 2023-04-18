import React,{useEffect, useState} from 'react'
import SinglePokemon from './single-pokemon'
import axios from 'axios';
const PokemonList = ({pokemonIndex}) => {
  
  
  const [pokemonList,setPokemonList] = useState([]);
  const [individualPokeArr,setIndividualPokeArr] = useState({});

  

  
  useEffect(()=>{

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pokemonIndex}`);
        setPokemonList(response.data.results);
      } catch (error){
        console.error('error fetching pokemon',error);
      }
    };

   


    // const processData = async () => {
    //   try {
    //     const resp = await axios.get
    //   } catch(error) {
    //     console.log(error);
    //   }
    // }


    fetchData();

  
  },[pokemonIndex])

  console.log(pokemonList.length,'length')



useEffect(()=> {
  pokemonList.map(pokemon => {
    setIndividualPokeArr({pokemon});
  })
},[pokemonIndex])


console.log(individualPokeArr)
  
  
  
   
  


  return (
    <div>
        <ul>
          {/* {pokemonList.map(item=><p key={item.name}>{item.name}</p>)} */}
      </ul>

    </div>
  )
}

export default PokemonList