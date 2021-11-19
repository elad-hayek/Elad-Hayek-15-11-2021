import {
UPADTAE_MAIN_LOCATION_TO_VIEW
}
from '../constants/reducer-actions'
    
    const initialValues = {
        locationToView: {}
    }
    
    export const homeReducer = (state = initialValues, {type, payload}) => {
        switch(type){
            case UPADTAE_MAIN_LOCATION_TO_VIEW:
                return {...state, locationToView: payload}
            default:
                return state
        }
    }
    
    export default homeReducer