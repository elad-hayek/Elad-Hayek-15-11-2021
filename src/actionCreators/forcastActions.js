import { apiKey, forcastUrl } from '../constants/api'
import {
    FETCH_FORCAST_REQUEST,
    FETCH_FORCAST_SUCCESS,
    FETCH_FORCAST_FAILURE
}
from '../constants/reducer-actions'
    
const fetchForcastRequest = () => {
    return { type: FETCH_FORCAST_REQUEST }
}

const fetchForcastSuccess = (data) => {
    return { type: FETCH_FORCAST_SUCCESS, payload: data }
}

const fetchForcastFailure = (error) => {
    return { type: FETCH_FORCAST_FAILURE, payload: error }
}

export const fetchForcast = (key, metric=false) =>{
    return async (dispatch)=>{
        dispatch(fetchForcastRequest())
        await fetch(`${forcastUrl}${key}?apikey=${apiKey}&metric=${metric}`)
        .then(response=>{
            if(response.status !== 200){
                return response.text().then(text=> {throw new Error(text)})
            }
            return response.json()
        })
        .then(data=>{
            dispatch(fetchForcastSuccess(data.DailyForecasts))
        })
        .catch(err=>{
            dispatch(fetchForcastFailure(err))
        })
    }
}