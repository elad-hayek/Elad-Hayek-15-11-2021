import React from 'react'
import './InformationCard.css'
// import fiveDayForcast from '../../../apivalues/5dayforcastshort.json'
// import currentLocation from '../../../apivalues/currentweathershort.json'
import { MdStar, MdStarOutline } from "react-icons/md";
import MiniForcastCard from '../MIniForcastCard/MiniForcastCard';
import { weatherIamgesUrl } from '../../../constants/api';

/** returns the correct url according to the icon number received  from the api */
const returnUrlForWeatherIcon = (iconNumber) =>{
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
                        <img width="75" height="45" alt="" src={returnUrlForWeatherIcon(currentLocation.WeatherIcon)}/>
                        <div className="today-city-name-and-temperature">
                            <div>tel aviv</div>
                            <div>{`${currentLocation.Temperature.Metric.Value} ${currentLocation.Temperature.Metric.Unit}`}</div>
                        </div>
                    </div>

                    <div className="add-to-favorites-container">
                        <MdStar/>
                        <MdStarOutline/>
                    </div>
                </div>

                <div className="middle-of-information-card">
                    <span className="current-weather-text">{currentLocation.WeatherText}</span>
                </div>

                <div className="bottom-of-information-card">
                    {
                        fiveDayForcast.map(forcast=>{
                            console.log(forcast)
                            return(
                                <div key={Math.random()}>
                                    <MiniForcastCard />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )

}
export default InformationCard