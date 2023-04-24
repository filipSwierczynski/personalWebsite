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

    return (
        <div className='single-pokemon '>
            
            <div>
                {shiny ? shinyImages : normalImages}
                
                <button onClick={handleShiny}>Show Shiny</button>
                
            </div>
            <div className='container'>
            <div className="flex justify-center space-x-3"> <span>#{pokemonId}</span> <h1>{name}</h1></div>
            <div className='flex justify-center space-x-3 text-center'>
                
                {types.map(type=><div className={type.type.name + "_type w-1/2"} key={type.slot}><span className={type.type.name + "_type-icon"}></span>{type.type.name}</div>)}
            </div>
            <div className='flex justify-center space-x-3'>

                <p>HT: {updatedHeight}m</p>
                <p>WT: {updatedWeight}kg</p>
                
            </div>
            
            <div>
                
                {stats.map((stat,i) => <div key={i}>{stat.stat.name}:{stat.base_stat}</div>)}
            </div>
            </div>
           
            
        </div>
    )
}

export default SinglePokemon