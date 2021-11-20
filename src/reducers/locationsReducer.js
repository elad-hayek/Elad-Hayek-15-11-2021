import {
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE
}
from '../constants/reducer-actions'
        
const initialValues = {
    loading: false, 
    data: [],
    error: ''
}
        
export const locationsReducer = (state = initialValues, {type, payload}) => {
    switch(type){
        case FETCH_LOCATIONS_REQUEST:
            return {...state, loading: true}
        case FETCH_LOCATIONS_SUCCESS:
            return {...state, loading: false, data: payload}
        case FETCH_LOCATIONS_FAILURE:
            return {...state, loading:false, error: payload}
        default:
            return state
    }
}

export default locationsReducer