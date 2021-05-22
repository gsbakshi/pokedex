import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.pokemons.map(
                (pokemon, index) => <Card key={ index + 1 } pokemon={ pokemon } />
            )
        }
    </div>
);
