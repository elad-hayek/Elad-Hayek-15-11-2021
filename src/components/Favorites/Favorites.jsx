import React from 'react'
import { useSelector } from 'react-redux'
import './Favorites.css'
import LocationCard from './LocationCard/LocationCard'


const Favorites = () =>{
    const favorites = useSelector(state=>state.favorites.favorites)
    let  f  = [...favorites, ...favorites,...favorites,...favorites,...favorites]

    return(
        <div className="favorites-container">
            <div className="favorites-cards-container">
                {
                    [...f,...f,...f].map(location=>{
                        return(
                            <LocationCard location={location} />
                        )
                    })
                }
            </div>
        </div>
    )

}
export default Favorites
