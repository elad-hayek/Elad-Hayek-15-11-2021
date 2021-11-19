import {
ADD_TO_FAVORITES,
REMOVE_FROM_FAVORITES
}
from '../constants/reducer-actions'

const initialValues = {
    favorites: []
}

export const favoritesReducer = (state = initialValues, {type, payload}) => {
    switch(type){
        case ADD_TO_FAVORITES:
            return {...state, favorites:[...favorites, payload]}
        case REMOVE_FROM_FAVORITES:
            return {...state, favorites:favorites.filter(id=>id !== payload)}
        default:
            return state
    }
}

export default favoritesReducer