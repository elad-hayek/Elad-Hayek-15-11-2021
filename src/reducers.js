import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import favoritesReducer from './reducers/favoritesReducer'
import homeReducer from './reducers/homeReducer'

const createRootReducer = (history) =>combineReducers({
    router: connectRouter(history),
    home: homeReducer,
    favorites: favoritesReducer
})
export default createRootReducer
