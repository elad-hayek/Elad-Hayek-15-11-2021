import React from 'react'
import './InformationCard.css'
import fiveDayForcast from '../../../apivalues/5dayforcastshort.json'
import currentLocation from '../../../apivalues/currentweathershort.json'
import { MdStar, MdStarOutline } from "react-icons/md";

const InformationCard = () =>{
    return(
        <div className="information-card-container">
            <div className="information-card">

                <div className="top-of-information-card">
                    <div className="today-city-information">
                        <img width="50" height="50"/>
                        <div className="today-city-name-and-temperature">
                            <div>tel aviv</div>
                            <div>{`${currentLocation[0].Temperature.Metric.Value} ${currentLocation[0].Temperature.Metric.Unit}`}</div>
                        </div>
                    </div>

                    <div className="add-to-favorites-container">
                        <MdStar/>
                        <MdStarOutline/>
                    </div>
                </div>

                <div className="middle-of-information-card">
                    <span class="current-weather-text">{currentLocation[0].WeatherText}</span>
                </div>

                <div className="bottom-of-information-card">
                    <span>{currentLocation[0].WeatherText}</span>
                </div>

            </div>
        </div>
    )

}
export default InformationCard