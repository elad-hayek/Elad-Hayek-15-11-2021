import React, { useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import fiveDayForcast from '../../apivalues/5dayforcastshort.json'
import currentLocationFromdb from '../../apivalues/currentweathershort.json'
import './Home.css'
import InformationCard from './InformarionCard/InformationCrad'
import { useDispatch, useSelector } from 'react-redux'
import { updateMainLocationToView } from '../../actionCreators/homeActions'
import { fetchCurrentWeather } from '../../actionCreators/currentWeatherActions'
import { fetchForcast } from '../../actionCreators/forcastActions'
import { objectValidation } from '../../actionCreators/generalFunctions'
import { defaultLocation } from '../../constants/api'
import ErrorToast from '../ErrorToast/ErrorToast'
import { ToastContainer } from 'react-bootstrap'


const Home = () =>{
    const dispatch = useDispatch()
    const currentWeather = useSelector(state=>state.currentWeather)
    const forcast = useSelector(state=>state.forcast)
    const errorStack = useSelector(state=>state.home.errorStack)

    useEffect(()=>{
        if(currentWeather.data.length === 0)
            dispatch(fetchCurrentWeather(defaultLocation.key, defaultLocation.name))
        
        if( objectValidation(forcast.data))
            dispatch(fetchForcast(defaultLocation.key, true))
        
        // dispatch(updateMainLocationToView({id:"215854",name:"Tel Aviv", location: currentLocationFromdb[0]}))
    },[])

    return(
        <div>
            <ToastContainer  position='top-center'>
                    {
                        errorStack.map(error=>{
                            return(
                                <ErrorToast key={error.id} id={error.id} name={error.name} error={error.error} />
                            )
                        })
                    }
            </ToastContainer>
            <SearchBar/>
            <div className="home-information-container">
                <InformationCard />
            </div>
        </div>
    )

}
export default Home