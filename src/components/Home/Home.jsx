import React, { useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import fiveDayForcast from '../../apivalues/5dayforcastshort.json'
import currentLocationFromdb from '../../apivalues/currentweathershort.json'
import './Home.css'
import InformationCard from './InformarionCard/InformationCrad'
import { useDispatch } from 'react-redux'
import { updateMainLocationToView } from '../../actionCreators/homeActions'
import { useSelector } from 'react-redux'
import { fetchCurrentWeather } from '../../actionCreators/currentWeatherActions'


const Home = () =>{
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(updateMainLocationToView({id:"215854",name:"tel-aviv", location: currentLocationFromdb[0]}))
        // dispatch(fetchCurrentWeather("215854"))
    },[])

    return(
        <div>
            <SearchBar/>
            <div className="home-information-container">
                <InformationCard fiveDayForcast={fiveDayForcast.DailyForecasts}/>
            </div>
        </div>
    )

}
export default Home