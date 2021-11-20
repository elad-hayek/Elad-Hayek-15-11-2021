import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import favoritesReducer from './reducers/favoritesReducer'
import homeReducer from './reducers/homeReducer'
import currentWeatherReducer from './reducers/currentWeatherReducer'
import forcastReducer from './reducers/forcastReducer'

const createRootReducer = (history) =>combineReducers({
    router: connectRouter(history),
    home: homeReducer,
    favorites: favoritesReducer,
    currentWeather: currentWeatherReducer,
    forcast: forcastReducer
})
export default createRootReducer
