import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './SearchBar.css'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLocations } from '../../../actionCreators/locationsActions'
import { fetchCurrentWeather } from '../../../actionCreators/currentWeatherActions'
import { fetchForcast } from '../../../actionCreators/forcastActions'
import { objectValidation } from '../../../actionCreators/generalFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


const SearchBar = () =>{
    const locations = useSelector(state=>state.locations)
    const currentLocation = useSelector(state=>state.home.locationToView)
    const theme = useSelector(state=>state.app.theme)
    const dispatch = useDispatch()
    const [selectedCity, setSelectedCity] = useState([])

    useEffect(()=>{
        if(selectedCity.length !== 0){
            if(objectValidation(currentLocation) || currentLocation.id !== selectedCity[0].Key){
                dispatch(fetchCurrentWeather(selectedCity[0].Key, selectedCity[0].LocalizedName))
                dispatch(fetchForcast(selectedCity[0].Key, true))
            }
        }
    },[selectedCity])


    return(
        <div className="main-searchbar-container">
            <Container>
                { locations.error && <small className="search-error-message" >{locations.error}</small>}
                <div className="container-for-adding-icon">
                    <AsyncTypeahead 
                        id="city-serch-autocomplete"
                        className={theme}
                        isLoading={locations.loading}
                        labelKey={option => `${option.Country.LocalizedName} - ${option.LocalizedName}`}
                        onSearch={(query) => {
                            dispatch(fetchLocations(query))
                        }}
                        options={locations.data}
                        onChange={(selected)=>{setSelectedCity(selected)}}
                        selected={selectedCity}
                        placeholder="Search for a city"
                        />
                <FontAwesomeIcon icon={faSearch} size="lg"  flip="horizontal" style={{position:'absolute', top:'23%', right:'5%'}}/>
                </div>
            </Container>
        </div>
    )

}
export default SearchBar