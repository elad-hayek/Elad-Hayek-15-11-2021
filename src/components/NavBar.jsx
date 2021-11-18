import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { routes } from '../constants/navigation'


const NavBar = () =>{
    return(
        <Navbar variant="blue">
            <Container>
                <Navbar.Brand as={Link} to={routes.HOME}>Weahter App</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to={routes.HOME} >Home</Nav.Link>
                    <Nav.Link as={Link} to={routes.FAVORITES} >Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar