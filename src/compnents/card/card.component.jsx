import React, { useState, useEffect } from 'react';
import './card.styles.css';

const Card = ({ url }) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => data)
            // .then(data => console.log(data))
            .then(pokemon => { setPokemon(pokemon) });
    }, [url])

    return (
        <div className='card-container'>
            <img
                alt={ pokemon.name }
                src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` }
            />
            <h2> { pokemon.name } </h2>
        </div>
    );
}

export default Card;