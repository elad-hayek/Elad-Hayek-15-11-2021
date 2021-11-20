import {
    FETCH_FORCAST_REQUEST,
    FETCH_FORCAST_SUCCESS,
    FETCH_FORCAST_FAILURE
}
from '../constants/reducer-actions'
import fiveDayForcast from '../apivalues/5dayforcastshort.json'
        
const initialValues = {
    loading: false, 
    data: {id: "215854", forcasts: fiveDayForcast.DailyForecasts},
    // data: {},
    error: ''
}
        
export const forcastReducer = (state = initialValues, {type, payload}) => {
    switch(type){
        case FETCH_FORCAST_REQUEST:
            return {...state, loading: true}
        case FETCH_FORCAST_SUCCESS:
            return {...state, loading: false, data: payload, error:''}
        case FETCH_FORCAST_FAILURE:
            return {...state, loading:false, error: payload}
        default:
            return state
    }
}

export default forcastReducer