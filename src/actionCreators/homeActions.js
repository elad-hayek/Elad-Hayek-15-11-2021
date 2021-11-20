import {
UPADTAE_MAIN_LOCATION_TO_VIEW,
ADD_TO_ERROR_STACK,
REMOVE_FROM_ERROR_STACK
}
from '../constants/reducer-actions'

export const updateMainLocationToView = (location) => {
    return { type: UPADTAE_MAIN_LOCATION_TO_VIEW, payload: location }
}

export const addToErrorStack = (errorObject) =>{
    return { type: ADD_TO_ERROR_STACK, payload: errorObject}
}

export const removeFromErrorStack = (id) =>{
    return { type: REMOVE_FROM_ERROR_STACK, payload: id }
}