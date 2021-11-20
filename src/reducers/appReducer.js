import { themes } from '../constants/general'
import {
    CHANGE_APP_THEME
}
from '../constants/reducer-actions'

const initialValues = {
    theme: themes.light
}

const appReducer = (state=initialValues, {type, payload}) =>{
    switch(type){
        case CHANGE_APP_THEME:
            return {...state, theme: payload}
        default:
            return state
    }

}

export default appReducer