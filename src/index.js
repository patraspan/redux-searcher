import React from 'react';
// import App from './App';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { Router, hashHistory } from 'react-router';
import routes from './routes.jsx';
import './country.css'

render (
        <Provider store={store}>
            <div>
                <Router history={hashHistory} routes={routes}/>

            <DevTools />
            </div>
        </Provider>
    ,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

