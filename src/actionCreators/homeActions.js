import {
UPADTAE_MAIN_LOCATION_TO_VIEW
}
from '../constants/reducer-actions'

export const updateMainLocationToView = (location) => {
    return { type: UPADTAE_MAIN_LOCATION_TO_VIEW, payload: location }
}