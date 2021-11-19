import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { updateMainLocationToView } from '../../../actionCreators/homeActions'
import './LocationCard.css'
import {routes} from '../../../constants/navigation'


const LocationCard = ({location}) =>{
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = () =>{
        dispatch(updateMainLocationToView(location))
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
