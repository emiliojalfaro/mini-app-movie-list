import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function AppNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='align-center'>
          <Nav className="me-auto">
            <Link className="popLink" to="/">Home</Link>
            <Link className="popLink" to="/MovieList">Movies</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}