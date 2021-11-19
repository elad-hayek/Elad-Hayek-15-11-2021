import React from 'react'
import currentWeather from '../../../apivalues/currentweathershort.json'
import './InformationCard.css'


const InformationCard = () =>{

    return(
        <div style={{width: '80%',height:'200px', display:'flex', justifyContent:'center', border:'1px solid red'}}>
            {currentWeather[0].WeatherText}
        </div>
    )

}
export default InformationCard