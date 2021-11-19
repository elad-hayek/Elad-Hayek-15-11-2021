import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import favoritesReducer from './reducers/favoritesReducer'

const createRootReducer = (history) =>combineReducers({
    router: connectRouter(history),
    favorites: favoritesReducer
})
export default createRootReducer
