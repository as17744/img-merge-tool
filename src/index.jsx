import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router';

render(
    <HashRouter>
        { renderRoutes(routes) }
    </HashRouter>,
    document.getElementById('app')
);
