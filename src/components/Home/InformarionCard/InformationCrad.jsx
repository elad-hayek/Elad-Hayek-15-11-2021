import React, { useEffect, useState } from 'react'
import './InformationCard.css'
import { MdStar, MdStarOutline } from "react-icons/md";
import MiniForcastCard from '../MIniForcastCard/MiniForcastCard';
import { IconContext } from 'react-icons/lib';
import { addToFavorites, removeFromFavorites } from '../../../actionCreators/favoritesActions';
import { useDispatch, useSelector } from 'react-redux';
import { OverlayTrigger, Spinner, Tooltip } from 'react-bootstrap';
import { objectValidation, returnUrlForWeatherIcon } from '../../../actionCreators/generalFunctions';


const InformationCard = () =>{
    const favorites = useSelector(state=>state.favorites.favorites)
    const currentLocation = useSelector(state=>state.home.locationToView)
    const currentWeather = useSelector(state=>state.currentWeather)
    const forcast = useSelector(state=>state.forcast)
    const dispatch = useDispatch()
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(()=>{
        favorites.forEach(location => {
            if(location.id === currentLocation.id){
                setIsFavorite(true)
            }
        })
        return(()=>{setIsFavorite(false)})
    },[currentLocation])

    const handleAddToFavorites = () =>{
        dispatch(addToFavorites(currentLocation))
        setIsFavorite(true)
    }
    
    const handleRemoveFromFavorites = () =>{
        dispatch(removeFromFavorites(currentLocation.id))
        setIsFavorite(false)
    }

    return(
        <div className="information-card-container">
            <div className="information-card">
                {
                    currentWeather.loading?
                    <div className="top-of-information-card">
                        <Spinner className="current-weather-spinner" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>

                    : currentWeather.error?
                    <div className="top-of-information-card">
                        <div>{currentWeather.error}</div>
                    </div>

                    :objectValidation(currentLocation)?
                    <div></div>
                    :
                    <>
                    <div className="top-of-information-card">
                        <div className="today-city-information">
                            <div className="today-city-name-and-temperature">
                                <div>{currentLocation.name}</div>
                                <div>{currentLocation.location.Temperature.Metric.Value} &#8451;</div>
                            </div>
                        </div>
                        <div className="middle-of-information-card">
                            <div className="weather-icon-container">
                                <img alt="" src={returnUrlForWeatherIcon(currentLocation.location.WeatherIcon)}/>
                            </div>
                            <span className="current-weather-text">{currentLocation.location.WeatherText}</span>
                        </div>
                        <OverlayTrigger
                            placement='top'
                            overlay={
                            <Tooltip>
                                {isFavorite? "Remove from favorites": "Add to favorites"}
                            </Tooltip>
                            }
                        >
                            <div className="add-to-favorites-container">
                                    <IconContext.Provider value={{className: 'favorites-icon'}}>
                                        {!isFavorite && <MdStarOutline onClick={handleAddToFavorites}/> }
                                        {isFavorite &&  <MdStar onClick={handleRemoveFromFavorites} />}
                                    </IconContext.Provider> 
                            </div>
                        </OverlayTrigger>
                    </div>

                    
                    </>
                }


                    
                <div className="bottom-of-information-card">
                    <div className="mini-forcast-cards-container">
                        {
                            forcast.loading?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
        
                            :forcast.error?
                            <div>{forcast.error}</div>

                            :
                            objectValidation(forcast.data, "and") &&
                             forcast.data.forcasts.map(day=>{
                                return(
                                    <MiniForcastCard forcast={day} key={Math.random()}/>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )

}
export default InformationCard