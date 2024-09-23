import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/search';
type Props = {
    setPage: (page: number) => void
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    handleSearch: (e: any) => void
    search: string | undefined
}

const NavBar = (props: Props) => {
    const navbarStyle = {
        backgroundColor: '#343a40', // Dark background
        boxShadow: '0 2px 4px rgba(0,0,0,.1)', // Custom shadow
      };
      
    
      
    
      const linkStyle = {
        color: 'orange',
        marginRight: '15px',
      };
  return (
    <Navbar style={navbarStyle} expand="lg" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#home" style={linkStyle} className="me-4">FitCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"#recipe-page"} onClick={() => props.setPage(0)} style={linkStyle} className="mx-2">Recipes</Nav.Link>
            <Nav.Link href="#shopping-list" onClick={() => props.setPage(1)} style={linkStyle} className="mx-2">User Page</Nav.Link>
            <Nav.Link href="#user-page" onClick={() => props.setPage(2)} style={linkStyle} className="mx-2">Shopping List</Nav.Link>
          </Nav>
          <Search onClick={props.onClick} handleSearch={props.handleSearch} search={props.search}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar