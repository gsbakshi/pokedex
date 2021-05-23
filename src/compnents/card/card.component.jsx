import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img
            alt={props.pokemon.name}
            src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png` }
        />
        <h2> { props.pokemon.name } </h2>
        {/* <p>{ props.pokemon.forms }</p> */}
    </div>
);