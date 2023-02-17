import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home, PokemonDetails } from './routes';
import {FavoritesProvider} from './FavoritesProvider';
import { Favorites } from './routes/Favorites';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <div data-testid='app'>
          <Navigation />

          <Routes>
            <Route path='/' element={<Home pokemonList={pokemonList} />} />
            <Route path='/:name' element={<PokemonDetails />} />
            <Route path="/favorites" element={<Favorites/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export { App };
