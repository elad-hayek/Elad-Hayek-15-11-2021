import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
    }
from '../constants/reducer-actions'

export const addToFavorites = (key) => {
    return { type: ADD_TO_FAVORITES, payload: key}
}

export const removeFromFavorites = (key) => {
    return { type: REMOVE_FROM_FAVORITES, payload: key}
}