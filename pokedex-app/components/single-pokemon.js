import React, { useState } from 'react'

function SinglePokemon(props){
    const {name,sprites,height,weight,types,stats,id} = props.pokemon;
    // console.log(name + " single pokemon")
    const {front_default,back_default,front_shiny,back_shiny} = sprites;
    let updatedWeight = weight / 10;
    let updatedHeight = height / 10;
    const [shiny,setShiny] = useState(false);

    const shinyImages = <div className='border-4 rounded-full border-1-black p-4 w-44 h-44 m-auto pokeImage'><img className='m-auto h-full' src={front_shiny} /> </div>

    const normalImages = <div className='border-4 rounded-full border-1-black p-4 w-44 h-44 m-auto pokeImage '><img className='m-auto h-full' src={front_default} /></div>;

    function handleShiny(){
        setShiny(!shiny);
    }
    let pokemonId = id.toString().padStart(4,0);

    const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
    
    return (
        <div className={"single-pokemon single-pokemon_"+types[0].type.name}>
            
            <div>
                {shiny ? shinyImages : normalImages}
                
                <button className='shiny_button' onClick={handleShiny}>Show Shiny</button>
                
            </div>
            <div className='container'>
            <div className="flex justify-center space-x-3"> <span>#{pokemonId}</span> <h1 className=''>{upperCaseName}</h1></div>
            <div className='flex justify-center space-x-3 text-center'>
                
                {types.map(type=><div className={type.type.name + "_type w-1/2 rounded"} key={type.slot}><span className={type.type.name + "_type-icon"}></span>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1) }</div>)}
            </div>
            <div className='flex justify-center space-x-3'>

                <p>HT: {updatedHeight}m</p>
                <p>WT: {updatedWeight}kg</p>
                
            </div>
            
            <div className='pokemon_stats flex flex-wrap'>
                
                {stats.map((stat,i) => <div className='w-1/2 text-left' key={i}>{stat.stat.name}:{stat.base_stat}</div>)}
            </div>
            </div>
           
            
        </div>
    )
}

export default SinglePokemon