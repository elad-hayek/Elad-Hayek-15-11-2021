import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import './SearchBar.css'
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead'
import autocomplete from '../../../apivalues/autocomplete.json'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLocations } from '../../../actionCreators/locationsActions'


const SearchBar = () =>{
    const locations = useSelector(state=>state.locations)
    const dispatch = useDispatch()
    const [selectedCity, setSelectedCity] = useState([])

    useEffect(()=>{console.log(selectedCity)},[selectedCity])

    return(
        <div className="main-searchbar-container">
            <Container>
                {/* <AsyncTypeahead 
                    id="city-serch-autocomplete"
                    isLoading={locations.loading}
                    labelKey={option => `${option.Country.LocalizedName} - ${option.LocalizedName}`}
                    onSearch={(query) => {
                        dispatch(fetchLocations(query))
                    }}
                    options={locations.data}
                    onChange={(selected)=>{setSelectedCity(selected)}}
                    selected={selectedCity}
                /> */}
                <Typeahead
                    id="city-serch-autocomplete"
                    labelKey={option => `${option.Country.LocalizedName} - ${option.LocalizedName}`}
                    onChange={(selected)=>{setSelectedCity(selected)}}
                    options={autocomplete}
                    placeholder="Search for a city"
                    selected={selectedCity}
                />
                {/* <Form.Control  placeholder="Search for a city" ref={searchRef} onChange={handleChange}/> */}
            </Container>
        </div>
    )

}
export default SearchBar