import { apiKey, currentWeatherUrl } from '../constants/api'
import {
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE
}
from '../constants/reducer-actions'
import { updateMainLocationToView } from './homeActions'
    
const fetchCurrentWeatherRequest = () => {
    return { type: FETCH_CURRENT_WEATHER_REQUEST }
}

const fetchCurrentWeatherSuccess = (data) => {
    return { type: FETCH_CURRENT_WEATHER_SUCCESS, payload: data }
}

const fetchCurrentWeatherFailure = (error) => {
    return { type: FETCH_CURRENT_WEATHER_FAILURE, payload: error }
}

export const fetchCurrentWeather = (key, name) =>{
    return async (dispatch)=>{
        dispatch(fetchCurrentWeatherRequest())
        await fetch(`${currentWeatherUrl}${key}?apikey=${apiKey}`)
        .then(response=>{
            if(response.status !== 200){
                return response.text().then(text=> {throw new Error(text)})
            }
            return response.json()
        })
        .then(data=>{
            dispatch(fetchCurrentWeatherSuccess(data))
            dispatch(updateMainLocationToView({id:key, name: name, location: data[0]}))
        })
        .catch(err=>{
            dispatch(fetchCurrentWeatherFailure(err))
        })
    }
}