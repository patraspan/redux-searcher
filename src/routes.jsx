import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component.jsx';
import Home from './presentational/home.component.jsx';
import Contact from './presentational/contact.component.jsx';
import NotFound from './presentational/not-found.component.jsx';


export default (
    <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound} />
    </Route>
);
