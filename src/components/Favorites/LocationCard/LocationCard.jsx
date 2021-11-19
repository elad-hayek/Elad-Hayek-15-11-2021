import React from 'react'
import { useDispatch } from 'react-redux'
import './LocationCard.css'


const LocationCard = ({location}) =>{

    return(
        <div>
            {location.name}
        </div>
    )

}
export default LocationCard
