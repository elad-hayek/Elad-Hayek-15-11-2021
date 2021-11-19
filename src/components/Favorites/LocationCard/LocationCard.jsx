import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './LocationCard.css'


const LocationCard = ({location}) =>{

    return(
        <div class="location-card">
            <Card>
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
