import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../components/MainPage'
import ViewerCard from '../components/ViewerCard'

class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={MainPage} ></Route>
                    <Route exact path={"/viewercard/:id"} component={ViewerCard} ></Route>
                </Switch>
            </BrowserRouter>
        )
    }
} 

export default Router

