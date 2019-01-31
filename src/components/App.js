import React from 'react';

import {VisibleTodoList} from "../containers/VisibleTodoList";

import AddTodo from "../containers/AddTodo";
import Footer from "./Footer";

export const App = (props) => {
    console.log(props.match.params.filter)
    return (
        <div>
            <AddTodo/>
            <VisibleTodoList filter={props.match.params.filter || 'SHOW_ALL'} />
            <Footer/>
        </div>
    );

}
