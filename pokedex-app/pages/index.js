
import axios from "axios"
import { Key, ReactElement, JSXElementConstructor, ReactFragment,useState,useEffect, use } from "react";
import SearchPokemon from '../components/search-pokemon';
import PokemonList from '../components/pokemon-list';
import SinglePokemon from '../components/single-pokemon';
import NextPokemon from '../components/nextPokemon';
export default function Home(props) {
  const [pokemonData,setPokemonData] = useState({});
  const [pokemonSearched,setPokemonSearched] = useState(false);
  const [currentPokemonIndex,setCurrentPokemonIndex] = useState(0);
  const [nextPokemonData,setNextPokemonData] = useState({});
  const [pokemonList,setPokemonList] = useState([]);

 


  const searchPokemonValue = async (inputValue) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + inputValue);
    setPokemonData(response.data);
    setPokemonSearched(true);
    setCurrentPokemonIndex(response.data.id);
    
  }

 
   const loadPokemonListData = async () => {
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${currentPokemonIndex}`);
    setPokemonList(response.data);
    
    
      }
      

    
    useEffect(()=>{
      loadPokemonListData();

    },[]);
  
    useEffect(()=>{
      loadPokemonListData();
    },[currentPokemonIndex]);

    
   

   
    
  return (
    <>
    <div>
      <h1>Pokedex</h1>

    <SearchPokemon onSearch={searchPokemonValue}/>


    
    
     

      

        {pokemonSearched && 
          <SinglePokemon pokemon={pokemonData}/>
          
        }


{Object.keys(pokemonList).length > 0 ? <PokemonList pokemonIndex={currentPokemonIndex}/> : "" }

       
        
        
        
      
      
    </div>
    </>
    

    
  )
}


