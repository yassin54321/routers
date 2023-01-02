import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NewMovie from './NewMovie';
import Search from './Search';

const NavBars = ({ rating,category, handleRating, handleText, handleAdd,handleCategory }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid id='fa'>
          <Navbar.Brand href="#"><Link to={'/MoviesList'}><h3>netflix men jumia</h3></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><Link to={'/'}><h3>Home</h3></Link> </Nav.Link>
              <Nav.Link href="#action2"><NewMovie handleAdd={handleAdd} /></Nav.Link>
            </Nav>
            
              <Search rating={rating} category={category} handleCategory={handleCategory} handleRating={handleRating} handleText={handleText}  />
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBars