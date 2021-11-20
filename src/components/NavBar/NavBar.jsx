import React, { useRef } from 'react'
import {Navbar, Container, Nav, Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudSun, faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeAppTheme } from '../../actionCreators/appActions'
import { themes } from '../../constants/general'


const NavBar = () =>{
    const theme = useSelector(state=>state.app.theme)
    const dispatch = useDispatch()
    const themeSwitchRef = useRef(false)

    const handleThemeSwitch = () =>{
        if(themeSwitchRef.current.checked)
            dispatch(changeAppTheme(themes.dark))
        else
            dispatch(changeAppTheme(themes.light))
    }

    return(
        <Navbar id="navbar" bg={theme} variant={theme}>
            <Container>
                <Col>
                <Navbar.Brand as={Link} to={routes.HOME}>
                    <FontAwesomeIcon icon={faCloudSun} size="lg" style={{marginRight: 10}}/>
                    Weather App
                </Navbar.Brand>
                </Col>

                {!themeSwitchRef.current.checked && 
                <FontAwesomeIcon icon={faSun} size="lg" style={{marginRight: 10}}/>}
                {themeSwitchRef.current.checked && 
                <FontAwesomeIcon icon={faMoon} size="lg" style={{marginRight: 10, color: '#fff'}}/>}
                <Form.Check ref={themeSwitchRef} className="theme-switch" type="switch" onChange={handleThemeSwitch}/>

                <Nav>
                    <Nav.Link as={Link} to={routes.HOME} >Home</Nav.Link>
                    <Nav.Link as={Link} to={routes.FAVORITES} >Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar