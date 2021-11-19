import React from 'react'
import { Container, InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import './SearchBar.css'


const SearchBar = () =>{

    return(
        <div className="main-searchbar-container">
            <Container>
                    <Form.Control  placeholder="Search for a city" />
            </Container>
        </div>
    )

}
export default SearchBar