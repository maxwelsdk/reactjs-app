import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './main/home/home';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/auth' component={Login} /> */}
        </Switch>
    );
}

export default Routes;