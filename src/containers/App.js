import React from 'react';

import {
    Route,
    Switch
} from 'react-router-dom'

import {
    Customer,
    Manager
} from './';

import {
    Page404,
    Entry
} from '../components';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Entry} />
                    <Route path="/customer" component={Customer} />
                    <Route path="/manager" component={Manager} />
                    <Route component={Page404}/>
                </Switch>
            </div>
        )
    }
}


export default App;