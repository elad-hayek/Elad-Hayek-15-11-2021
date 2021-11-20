import { apiKey, autocompleteUrl } from '../constants/api'
import {
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE
}
from '../constants/reducer-actions'
    
const fetchLocationsRequest = () => {
    return { type: FETCH_LOCATIONS_REQUEST }
}

const fetchLocationsSuccess = (data) => {
    return { type: FETCH_LOCATIONS_SUCCESS, payload: data }
}

const fetchLocationsFailure = (error) => {
    return { type: FETCH_LOCATIONS_FAILURE, payload: error }
}

export const fetchLocations = (searchString) =>{
    return async (dispatch)=>{
        dispatch(fetchLocationsRequest())
        await fetch(`${autocompleteUrl}?apikey=${apiKey}&q=${searchString}`)
        .then(response=>{
            if(response.status !== 200){
                return response.text().then(text=> {throw new Error(text)})
            }
            return response.json()
        })
        .then(data=>{
            dispatch(fetchLocationsSuccess(data))
        })
        .catch(err=>{
            dispatch(fetchLocationsFailure(err))
        })
    }
}