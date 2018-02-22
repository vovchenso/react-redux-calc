import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './containers/Application';
import store from './store';

/** load styles **/
import './styles';

/** Run application **/
ReactDOM.render(
    <Provider store={ store }>
        <Application />
    </Provider>,
    document.getElementById('root')
);
