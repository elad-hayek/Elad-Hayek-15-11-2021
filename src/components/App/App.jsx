import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import { themes } from '../../constants/general'
import {routes} from '../../constants/navigation'
import Favorites from '../Favorites/Favorites'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'


const App = () =>{
    const theme = useSelector(state=>state.app.theme)

    useEffect(()=>{
        switch(theme){
            case themes.dark:
                document.body.className = "body-dark"
                break
            case themes.light:
                document.body.className = "body-light"
                break
            default:
                return
        }
    },[theme])

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
