import React from "react";
import {Outlet} from "react-router-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import { Provider } from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer"
import {composeWithDevTools} from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const reducer = combineReducers({ tuits: tuitsReducer, who: whoReducer, profile: profileReducer });
const store = createStore(reducer, composedEnhancer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <Outlet/>
        </Provider>
    )
};

export default Tuiter;