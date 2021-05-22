import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img
            alt={props.pokemon.name}
            // src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.i}.png` }
            // src={ `https://robohash.org/${props.pokemon.id}/?set=set2&size=180x180` }
        />
        <h2> { props.pokemon.name } </h2>
        {/* <p>{ props.pokemon.email }</p> */}
    </div>
);