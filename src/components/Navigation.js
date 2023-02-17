import React, {useContext} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import squirtle from '../../public/squirtle.png';
import { FavoritesContext } from '../FavoritesProvider';

function Navigation() {
const {favorites} = useContext(FavoritesContext)

  return (
    <Navbar sticky='top' bg='dark' variant='dark' className='mb-4'>
      <Container>
        <Navbar.Brand>
          <Image src={squirtle} width='30' className='me-2' />
          Pokeverse
        </Navbar.Brand>

        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>All Pokemon</Nav.Link>
          <Nav.Link as={Link} to='/favorites'>My Favorites [{favorites.length}]</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };
