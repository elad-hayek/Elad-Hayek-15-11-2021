import React from 'react'
import { useSelector } from 'react-redux'
import './Favorites.css'
import LocationCard from './LocationCard/LocationCard'


const Favorites = () =>{
    const favorites = useSelector(state=>state.favorites.favorites)

    return(
        <div className="favorites-container">
            { favorites.length !== 0?
                <div className="favorites-cards-container">
                    {
                        favorites.map(location=>{
                            return(
                                <LocationCard location={location} key={Math.random()}/>
                            )
                        })
                    }
                </div>
                :
                <div className="no-locations-text">
                    No locations have been added go to the home page to add locations now !
                </div>
            }
        </div>
    )

}
export default Favorites
