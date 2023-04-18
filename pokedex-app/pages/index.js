
import axios from "axios"
import { Key, ReactElement, JSXElementConstructor, ReactFragment,useState,useEffect } from "react";
import SearchPokemon from '../components/search-pokemon';
import PokemonList from '../components/pokemon-list';
import SinglePokemon from '../components/single-pokemon';
import NextPokemon from '../components/nextPokemon';
export default function Home(props) {
  const [pokemonData,setPokemonData] = useState({});
  const [pokemonSearched,setPokemonSearched] = useState(false);
  const [currentPokemonIndex,setCurrentPokemonIndex] = useState(0);
  const [nextPokemonData,setNextPokemonData] = useState({});

  

  const [pokemonList,setPokemonList] = useState([])

  const searchPokemonValue = async (inputValue) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + inputValue);
    setPokemonData(response.data);
    setPokemonSearched(true);
    setCurrentPokemonIndex(response.data.id);
    // console.log(pokemonData);
    
  }


   const loadPokemonList = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${currentPokemonIndex}`);
    setPokemonList(response.data);
    
    console.log(pokemonList);
  }
 

  
    useEffect(()=>{
      loadPokemonList();
    },[]);
  
    useEffect(()=>{
      loadPokemonList();
    },[currentPokemonIndex]);
  


  return (
    <>
    <div>
      <h1>Pokedex</h1>

    <SearchPokemon onSearch={searchPokemonValue}/>


     <PokemonList pokeList={pokemonList}/>

      

        {pokemonSearched && 
          <SinglePokemon pokemon={pokemonData}/>
          
        }

       
        
        
        
      
      
    </div>
    </>
    

    
  )
}


