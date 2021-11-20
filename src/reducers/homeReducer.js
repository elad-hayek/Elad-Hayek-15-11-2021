import {
    UPADTAE_MAIN_LOCATION_TO_VIEW,
    ADD_TO_ERROR_STACK,
    REMOVE_FROM_ERROR_STACK
}
from '../constants/reducer-actions'
    
const initialValues = {
    locationToView: {},
    errorStack: []
}

export const homeReducer = (state = initialValues, {type, payload}) => {
    switch(type){
        case UPADTAE_MAIN_LOCATION_TO_VIEW:
            return {...state, locationToView: payload}
        case ADD_TO_ERROR_STACK:
            return {...state, errorStack: state.errorStack.concat(payload)}
        case REMOVE_FROM_ERROR_STACK:
            return {...state, errorStack: state.errorStack.filter(error=>error.id !== payload)}
        default:
            return state
    }
}

export default homeReducer