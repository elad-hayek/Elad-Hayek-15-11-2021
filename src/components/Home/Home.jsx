import React, { useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import './Home.css'
import InformationCard from './InformarionCard/InformationCrad'
import { useDispatch, useSelector } from 'react-redux'
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
            <div className="search-and-info-container">
                <SearchBar/>
                <div className="home-information-container">
                    <InformationCard />
                </div>
            </div>
        </div>
    )

}
export default Home