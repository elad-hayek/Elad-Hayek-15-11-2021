import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import favoritesReducer from './reducers/favoritesReducer'
import homeReducer from './reducers/homeReducer'
import currentWeatherReducer from './reducers/currentWeatherReducer'
import forcastReducer from './reducers/forcastReducer'
import locationsReducer from './reducers/locationsReducer'
import appReducer from './reducers/appReducer'

const createRootReducer = (history) =>combineReducers({
    router: connectRouter(history),
    app: appReducer,
    home: homeReducer,
    favorites: favoritesReducer,
    currentWeather: currentWeatherReducer,
    forcast: forcastReducer,
    locations: locationsReducer
})
export default createRootReducer
