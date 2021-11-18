import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { routes } from '../constants/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudSun} from '@fortawesome/free-solid-svg-icons'


const NavBar = () =>{
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to={routes.HOME}>
                    <FontAwesomeIcon icon={faCloudSun} size="xl" style={{marginRight: 10}}/>
                    Weahter App
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to={routes.HOME} >Home</Nav.Link>
                    <Nav.Link as={Link} to={routes.FAVORITES} >Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar