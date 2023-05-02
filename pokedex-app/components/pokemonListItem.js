import React from 'react'

function PokemonListItem(props) {
    const {name,sprites,height,weight,types,stats,id} = props.pokemon;
    const {front_default,back_default,front_shiny,back_shiny} = sprites;

    const normalImages = <div className='border-4 rounded-full border-1-black p-4 w-44 h-44 m-auto pokeImage '><img className='m-auto h-full' src={front_default} /></div>;

    let pokemonId = id.toString().padStart(4,0);
    const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className={"single-pokemon list_pokemon_item single-pokemon_"+types[0].type.name}>
            
            <div>
                 {normalImages}
                
                
                
            </div>
            <div className='container'>
            <div className="flex justify-center space-x-3"> <span>#{pokemonId}</span> <h1>{upperCaseName}</h1></div>
            <div className='flex justify-center space-x-3 text-center'>
                
                {types.map(type=><div className={type.type.name + "_type w-1/2"} key={type.slot}><span className={type.type.name + "_type-icon"}></span>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>)}
            </div>
            
            
            
            </div>
           
            
        </div>
    )
}

export default PokemonListItem