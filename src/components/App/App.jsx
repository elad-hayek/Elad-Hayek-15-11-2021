import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {routes} from '../../constants/navigation'
import Favorites from '../Favorites/Favorites'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'


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
