import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateMainLocationToView } from '../../../actionCreators/homeActions'
import './LocationCard.css'
import { routes } from '../../../constants/navigation'
import { objectValidation } from '../../../actionCreators/generalFunctions'
import { fetchForcast } from '../../../actionCreators/forcastActions'


const LocationCard = ({location}) =>{
    const dispatch = useDispatch()
    const forcast = useSelector(state=>state.forcast)
    const history = useHistory()

    const handleClick = () =>{
        dispatch(updateMainLocationToView(location))

        // if the key is diffrent from the one of forcast in store, fetch the forcast
        if(objectValidation(forcast.data) || forcast.data.key !== location.key)
            dispatch(fetchForcast(location.key, true))


        history.push(routes.HOME)

    }

    return(
        <div className="location-card">
            <Card onClick={handleClick}>
                <Card.Header as="h5">{location.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{location.location.WeatherText}</Card.Title>
                    <Card.Text>
                        {location.location.Temperature.Metric.Value} &#8451;
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}
export default LocationCard
