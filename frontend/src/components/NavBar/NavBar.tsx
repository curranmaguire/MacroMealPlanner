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

  return (
    <Navbar bg="dark" variant='dark' expand="lg" data-bs-theme="dark" className="py-3"  collapseOnSelect>
      <Container>
        <Navbar.Brand href="#" onClick={() => props.setPage(0)} >FitCook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"#recipe-page"} onClick={() => props.setPage(3)}  className="mx-2">Recipes</Nav.Link>
            <Nav.Link href="#shopping-list" onClick={() => props.setPage(1)}  className="mx-2">User Page</Nav.Link>
            <Nav.Link href="#user-page" onClick={() => props.setPage(2)}  className="mx-2">Shopping List</Nav.Link>
          </Nav>
          <Search onClick={props.onClick} handleSearch={props.handleSearch} search={props.search}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar