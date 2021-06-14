import React, { useState, useEffect } from 'react';
import CardList  from './compnents/card-list/card-list.component.jsx';
import SearchBox from './compnents/search-box/search-box.component.jsx';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(response => response.json())
      .then(data => data.results)
      .then(pokemons => { setPokemons(pokemons) });
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredPokemons = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
  );
  
  
  return !pokemons.length ? <h1>Loading</h1> : (
    <div className="App">
      {/* <h1>Pokedex</h1> */ }
      <div>
        <img alt='Pokemon Logo' src='http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG9.png' />
      </div>
      <SearchBox
        placeholder='Search Pokemon'
        searchChange={ onSearchChange }
      />
      <CardList pokemons={ filteredPokemons } />
    </div>
  );
  
}

export default App;
