import React from 'react';
import {
    Router,
    browserHistory,
} from 'react-router';
import _ from 'lodash';

// Views
import DummyView from 'client/Tooltip';

const SiteRouter = () => (
    <Router
        history={browserHistory}
        routes={
            [{
                path: '/',
                component: DummyView,
                methods,
            }]
        }
    />
);

export default SiteRouter;
