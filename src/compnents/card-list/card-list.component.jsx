import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ pokemons }) => {
    return (
        <div className='card-list'>
            {
                pokemons.map(
                    (pokemon) => <Card key={ pokemon.name } name={ pokemon.name } url={ pokemon.url } />
                )
            }
        </div>
    );
}

export default CardList;