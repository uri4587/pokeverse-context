import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {FavoritesContext} from '../FavoritesProvider';



function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const {addFavorite, removeFavorite, favorites} = useContext(FavoritesContext);
 
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img
        width='286'
        height='286'
        bg='dark'
        variant='top'
        src={pokemon?.sprites.front_default}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/${name}`}>{name}</Link>
        </Card.Title>
        <Card.Text as='div'>
          Abilities:
          <ul>
            {pokemon?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </Card.Text>
        {
        favorites.includes(name) 
        ? 
        <Button 
        variant="primary" 
        onClick={() => removeFavorite(name)}
        >
          Remove from Favorites
        </Button> 
        :
        <Button 
        variant="primary" 
        onClick={() => addFavorite(name)}
        >
          Add to Favorites
        </Button> 
        }
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
