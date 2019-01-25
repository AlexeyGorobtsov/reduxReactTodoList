import React from 'react';
import { render } from 'react-dom';
import  { Provider }  from "react-redux";
import { createStore } from 'redux';

import {todoApp} from "./reducers";
import { App } from "./components/App";
import {addTodo} from "./actions";

export const store = createStore(todoApp);
store.dispatch(addTodo('Learn about actions'))
console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </ Provider>,
    document.getElementById('root')
);
