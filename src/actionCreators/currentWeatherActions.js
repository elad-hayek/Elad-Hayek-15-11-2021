import {
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE
}
from '../constants/reducer-actions'
    
export const fetchCurrentWeatherRequest = () => {
    return { type: FETCH_CURRENT_WEATHER_REQUEST }
}

export const fetchCurrentWeatherSuccess = (data) => {
    return { type: FETCH_CURRENT_WEATHER_SUCCESS ,payload: data }
}

export const fetchCurrentWeatherRequest = (error) => {
    return { type: FETCH_CURRENT_WEATHER_FAILURE, payload: error }
}

export const fetchCurrentWeather = () =>{
    
}