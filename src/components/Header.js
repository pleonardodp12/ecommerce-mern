import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Lojas Mern</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Nav.Link><i className="fas fa-shopping-cart mx-1"></i>Meu Carrinho</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link href="/login"><i className="fas fa-user mx-1"></i>Login</Nav.Link>
              </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;