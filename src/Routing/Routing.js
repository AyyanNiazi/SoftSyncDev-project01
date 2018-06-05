import React from 'react'
import App from '../App';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Navigor extends React.Component{

    render(){
        return(
            <div>
                <Router>
                    <Route path='/' exact Component={Home}/>
                    <Route path='/studentLogin' exact Component={Home}/>
                    <Route path='/companyLogin'  Component={Home}/>
                    <Route path='/adminLogin'  Component={Home}/>
                </Router>
            </div>
        )
    }
}