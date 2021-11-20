import React, { useEffect, useState } from 'react'
import './InformationCard.css'
import { MdStar, MdStarOutline } from "react-icons/md";
import MiniForcastCard from '../MIniForcastCard/MiniForcastCard';
import { weatherIamgesUrl } from '../../../constants/api';
import { IconContext } from 'react-icons/lib';
import { addToFavorites, removeFromFavorites } from '../../../actionCreators/favoritesActions';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

/** returns the correct url according to the icon number received  from the api */
const returnUrlForWeatherIcon = (iconNumber) =>{
    if(iconNumber<10)
        iconNumber = `0${iconNumber}`
    return weatherIamgesUrl.replace("@@", iconNumber)
}

const InformationCard = () =>{
    const favorites = useSelector(state=>state.favorites.favorites)
    const currentLocation = useSelector(state=>state.home.locationToView)
    const currentWeather = useSelector(state=>state.currentWeather)
    const forcast = useSelector(state=>state.forcast)
    const dispatch = useDispatch()
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(()=>{
        favorites.forEach(location => {
            if(location.id === currentLocation.id)
                setIsFavorite(true)
        })
    },[])

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
                    Object.keys(currentLocation).length === 0 ||
                    currentLocation === undefined || currentLocation === null
                    || currentWeather.loading?

                    <div className="top-of-information-card">
                        <Spinner className="current-weather-spinner" animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>

                    : currentWeather.error?
                    <div className="top-of-information-card">
                        <div>{currentWeather.error}</div>
                    </div>

                    :
                    <>
                    <div className="top-of-information-card">
                        <div className="today-city-information">
                            <div className="today-city-name-and-temperature">
                                <div>{currentLocation.name}</div>
                                <div>{currentLocation.location.Temperature.Metric.Value} &#8451;</div>
                            </div>
                        </div>

                        <div className="add-to-favorites-container">
                            <IconContext.Provider value={{className: 'favorites-icon'}}>
                                {!isFavorite && <MdStarOutline onClick={handleAddToFavorites}/> }
                                {isFavorite &&  <MdStar onClick={handleRemoveFromFavorites} />}
                            </IconContext.Provider>  
                        </div>
                    </div>

                    <div className="middle-of-information-card">
                        <img width="120" height="72" alt="" src={returnUrlForWeatherIcon(currentLocation.location.WeatherIcon)}/>
                        <span className="current-weather-text">{currentLocation.location.WeatherText}</span>
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
                            Object.keys(forcast.data).length !== 0 &&
                            forcast !== undefined && forcast !== null &&
                             forcast.data.forcasts.map(day=>{
                                return(
                                    <div key={Math.random()}>
                                        <MiniForcastCard forcast={day} />
                                    </div>
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