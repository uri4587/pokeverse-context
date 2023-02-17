import React, {useContext} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FavoritesContext } from '../FavoritesProvider';
import { PokemonCard } from '../components';

export function Favorites(props) {
    const {favorites} = useContext(FavoritesContext)
   
    return (
    <Container>
      <Row className='g-4'>
        {favorites.map((favorite) => (
            console.log(favorite),
          <Col key={favorite}>
            <PokemonCard name={favorite} />
          </Col>
        ))}
      </Row>
    </Container>
    )
}
