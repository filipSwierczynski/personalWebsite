import React,{useEffect, useState} from 'react'
import SinglePokemon from './single-pokemon'
import axios from 'axios';
const PokemonList = ({pokemonIndex}) => {
  
  const [pokemonList,setPokemonList] = useState([]);
  const [individualPokeArr,setIndividualPokeArr] = useState([]);

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


  

useEffect(()=> {
  const fetchData = async () => {
    try {
      const responses = await Promise.all(
        pokemonList.map(pokemon => axios.get(pokemon.url))
      );
      const individialPokemonArr = [];

      responses.forEach((resp,index)=>{
        individialPokemonArr.push(resp.data);
      });

      setIndividualPokeArr([individialPokemonArr])


    } catch (error) {
      console.log(error);
    }
  }
  
  
 
    fetchData();
 

},[pokemonIndex])






  return (
    <div>
        <ul>
          {individualPokeArr.length > 0 ? 
          individualPokeArr[0].map(item=> <div key={item.id}>{item.name}</div>) : ""}
        
          
          
      </ul>

    </div>
  )
}

export default PokemonList