import React from 'react';
import {Provider} from "react-redux";
import WattMillApp from "./src/modules/WattMillApp";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./src/reducers/rootReducer";

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <WattMillApp/>
            </Provider>
        );
    }
}