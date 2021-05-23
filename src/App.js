import React, { Component } from 'react';
import { CardList } from './compnents/card-list/card-list.component.jsx';
import { SearchBox } from './compnents/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      pokemons: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(response => response.json())
      .then(res => this.setState(res.results.forEach(
        pokemon => this.fetchPokemon(pokemon)
      )))
  }

  fetchPokemon = (pokemon) => {
    let url = pokemon.url;
    fetch(url)
      .then(resp => resp.json())
      .then(rest => {
        this.state.pokemons.push(rest)
        console.log(this.state.pokemons)
      }
      )
  }

  changeHandler = e => {
    this.setState({ searchField: e.target.value });
  }
  
  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/* <h1>Pokedex</h1> */ }
        <div>
        <img alt='Pokemon Logo' src='http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG9.png' />
        </div>
        <SearchBox
          placeholder = 'Search Pokemon' 
          changeHandler = { this.changeHandler }
        />
        <CardList pokemons = { filteredPokemons } />
      </div>
    );
  }
}

export default App;
