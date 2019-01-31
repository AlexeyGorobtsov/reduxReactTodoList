import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import {todoApp} from "./reducers";
import {Root} from "./components/Root";

export const store = createStore(todoApp);
// store.dispatch(addTodo('Learn about actions'))
// console.log(store.getState());

render(<Root store={store} />, document.getElementById('root'));
