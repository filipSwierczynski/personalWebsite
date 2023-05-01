
import axios from "axios"
import { Key, ReactElement, JSXElementConstructor, ReactFragment,useState,useEffect, use } from "react";
import SearchPokemon from '../components/search-pokemon';
import PokemonList from '../components/pokemon-list';
import SinglePokemon from '../components/single-pokemon';
import NextPokemon from '../components/nextPokemon';
export default function Home() {
  const [pokemonData,setPokemonData] = useState({});
  const [pokemonSearched,setPokemonSearched] = useState(false);
  const [currentPokemonIndex,setCurrentPokemonIndex] = useState(null);
  const [pokemonList,setPokemonList] = useState([]);
  const [invalidSearch,setInvalidSearch] = useState(false);

  const handle = (promise) =>
  promise
    .then((data) => [undefined, data])
    .catch((error) => Promise.resolve([error, undefined]));


  const searchPokemonValue = async (inputValue) => {
    const [error,response] = await handle(axios.get('https://pokeapi.co/api/v2/pokemon/' + inputValue));
    if(error){
      setInvalidSearch(true)
      
    } else {
      console.log(response);
      console.log(error);
      setCurrentPokemonIndex(response.data.id);
      setPokemonData(response.data);
      setPokemonSearched(true);
      setInvalidSearch(false);
      console.log(invalidSearch)
    }
    
    
  } 

  const loadPokemonListData = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${currentPokemonIndex}`);
    // setPokemonList(response.data);
  }
      

    useEffect(()=>{
      loadPokemonListData();
    },[currentPokemonIndex]);

    
   

   
    
  return (
    <>
    <div className="container mx-auto">
      <h1>Pokedex</h1>

    <SearchPokemon onSearch={searchPokemonValue}/>
    {invalidSearch ? <p>Invalid Search term</p> : ""}
        {pokemonSearched && 
        <div className="featured-pokemon content-center flex m-auto justify-items-center flex-col text-center w-3/6 m-auto">
          <SinglePokemon pokemon={pokemonData}/>
        </div>
          
        }
        {pokemonSearched && 
        <PokemonList pokemonIndex={currentPokemonIndex}/> 
        }
    </div>
    </>
    

    
  )
}


