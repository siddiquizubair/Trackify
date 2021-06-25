import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { App } from '../App';
import Display from '../pages/Display';

const loggedIn = true;

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/:type/top'>
                { loggedIn ? <Route path='/:type/top' render={(props) => <Display {...props} />}/> : <Redirect to='/'/>}
            </Route>
        </Switch>
    );
}

export default Main;