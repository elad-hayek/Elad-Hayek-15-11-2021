import React from 'react'
import './InformationCard.css'
import { MdStar, MdStarOutline } from "react-icons/md";
import MiniForcastCard from '../MIniForcastCard/MiniForcastCard';
import { weatherIamgesUrl } from '../../../constants/api';
import { IconContext } from 'react-icons/lib';

/** returns the correct url according to the icon number received  from the api */
export const returnUrlForWeatherIcon = (iconNumber) =>{
    if(iconNumber<10)
        iconNumber = `0${iconNumber}`
    return weatherIamgesUrl.replace("@@", iconNumber)
}

const InformationCard = ({currentLocation, fiveDayForcast}) =>{
    return(
        <div className="information-card-container">
            <div className="information-card">

                <div className="top-of-information-card">
                    <div className="today-city-information">
                        <div className="today-city-name-and-temperature">
                            <div>Tel-Aviv</div>
                            <div>{currentLocation.Temperature.Metric.Value} &#8451;</div>
                        </div>
                    </div>

                    <div className="add-to-favorites-container">
                        <IconContext.Provider value={{className: 'favorites-icon'}}>
                            <MdStarOutline/>
                        </IconContext.Provider>
                    </div>
                </div>

                <div className="middle-of-information-card">
                    <img width="120" height="72" alt="" src={returnUrlForWeatherIcon(currentLocation.WeatherIcon)}/>
                    <span className="current-weather-text">{currentLocation.WeatherText}</span>
                </div>

                <div className="bottom-of-information-card">
                    <div className="mini-forcast-cards-container">
                        {
                            fiveDayForcast.map(forcast=>{
                                console.log(forcast)
                                return(
                                    <div key={Math.random()}>
                                        <MiniForcastCard forcast={forcast} />
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