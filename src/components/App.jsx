import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { routes } from '../constants/navigation'
import Favorites from './Favorites'
import Home from './Home'
import NavBar from './NavBar'

const App = () =>{

    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path={routes.HOME} component={Home}/>
                <Route path={routes.FAVORITES} component={Favorites}/>
            </Switch>
        </div>
    )

}
export default App
