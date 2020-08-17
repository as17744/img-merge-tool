import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import store from '../redux/store';
import routes from './router';

render(
    <Provider store={store}>
        <HashRouter>
            { renderRoutes(routes) }
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
