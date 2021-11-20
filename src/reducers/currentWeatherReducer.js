import {
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE
}
from '../constants/reducer-actions'
        
const initialValues = {
    loading: false, 
    data: [],
    error: ''
}
        
export const currentWeatherReducer = (state = initialValues, {type, payload}) => {
    switch(type){
        case FETCH_CURRENT_WEATHER_REQUEST:
            return {...state, loading: true}
        case FETCH_CURRENT_WEATHER_SUCCESS:
            return {...state, loading: false, data: payload, error:''}
        case FETCH_CURRENT_WEATHER_FAILURE:
            return {...state, loading:false, error: payload}
        default:
            return state
    }
}

export default currentWeatherReducer