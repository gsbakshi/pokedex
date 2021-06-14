import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, searchChange }) => (
    <input
        className='search'
        type='search'
        placeholder = { placeholder }
        onChange={ searchChange }
    />
);

export default SearchBox;