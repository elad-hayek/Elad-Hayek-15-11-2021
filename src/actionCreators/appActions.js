import {
    CHANGE_APP_THEME
}
from '../constants/reducer-actions'

export const changeAppTheme = (theme) =>{
    return { type: CHANGE_APP_THEME, payload: theme}
}