import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


const SearchBar = () =>{

    return(
        <>
        {/* <Container> */}
                <Form.Control  placeholder="Search for a city" />
        {/* </Container> */}
        </>
    )

}
export default SearchBar