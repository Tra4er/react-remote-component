import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import List from './list'

import './styles.css'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render((
    <Provider store={store}>
        <List/>
    </Provider>
), document.querySelector('[data-role="react"]'));
