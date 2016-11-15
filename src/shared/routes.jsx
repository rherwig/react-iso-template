import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import View from './components/View';

export default (
    <Route component={App}>
        <Route path="/" component={View}/>
    </Route>
);