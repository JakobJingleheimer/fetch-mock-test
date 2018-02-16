import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Router from './Router';

// Libs
import 'client/common/styles/semantic-ui/semantic.less';
import 'client/common/styles/styles.scss';

browser.window.webappStart = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router/>
        </Provider>,
        browser.document.getElementsByClassName('js-content')[0],
    );
};
