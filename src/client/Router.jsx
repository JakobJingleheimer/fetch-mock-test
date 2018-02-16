import React from 'react';
import {
    Router,
    browserHistory,
} from 'react-router';
import _ from 'lodash';

// Views
import TestComponent from './TestComponent';

const SiteRouter = () => (
    <Router
        history={browserHistory}
        routes={
            [{
                path: '/',
                component: TestComponent,
                methods,
            }]
        }
    />
);

export default SiteRouter;
