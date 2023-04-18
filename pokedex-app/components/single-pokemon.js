import React, { useState } from 'react'

function SinglePokemon(props){
    const {name,sprites,height,weight,types,stats} = props.pokemon;
    // console.log(name + " single pokemon")
    const {front_default,back_default,front_shiny,back_shiny} = sprites;
    let updatedWeight = weight / 10;
    let updatedHeight = height / 10;
    const [shiny,setShiny] = useState(false);

    const shinyImages = <div><img src={front_shiny} /> <img src={back_shiny} /></div>
    const normalImages = <div><img src={front_default} /><img src={back_default} /></div>;
    function handleShiny(){
        setShiny(!shiny);
    }
    return (
        <>
            <div><h1>{name}</h1></div>
            <div>
                {shiny ? shinyImages : normalImages}
                {}
                <button onClick={handleShiny}>Show Shiny</button>
                
            </div>
            <div className=''>

                <p>Height: {updatedHeight}m</p>
                <p>Weight: {updatedWeight}kg</p>
                
            </div>
            <div>
                <p>Type:</p>
                {types.map(type=><div key={type.slot}>{type.type.name}</div>)}
            </div>
            <div>
                <p>Stats</p>
                {stats.map((stat,i) => <div key={i}>{stat.stat.name}:{stat.base_stat}</div>)}
            </div>
            
        </>
    )
}

export default SinglePokemon