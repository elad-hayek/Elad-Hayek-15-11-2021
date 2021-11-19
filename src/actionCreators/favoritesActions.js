import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
    }
from '../constants/reducer-actions'

export const addToFavorites = (location) => {
    return { type: ADD_TO_FAVORITES, payload: location}
}

export const removeFromFavorites = (key) => {
    return { type: REMOVE_FROM_FAVORITES, payload: key}
}