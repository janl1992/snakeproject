import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storage from 'redux-persist/lib/storage';
import {createRootReducer} from './reducer/createRootReducer';
import {createHashHistory} from 'history';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const history = createHashHistory();

// Only persist selected sub parts of the redux store
// By default: persist nothing -> see root reducers for exceptions
const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(rootPersistConfig, createRootReducer(history));

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
