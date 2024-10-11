import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/search';

type Props = {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    search: string
}

const NavBar = ({ handleSearch, search }: Props) => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <Navbar bg="dark" variant='dark' expand="lg" data-bs-theme="dark" className="py-3" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">FitCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/recipe" className="mx-2">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/user" className="mx-2">User Page</Nav.Link>
            <Nav.Link as={Link} to="/shopping-list" className="mx-2">Shopping List</Nav.Link>
          </Nav>
          <Search onClick={handleSearchSubmit} handleSearch={handleSearch} search={search}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar