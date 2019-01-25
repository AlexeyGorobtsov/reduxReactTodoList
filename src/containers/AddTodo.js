import React from 'react';
import {addTodo} from "../actions";
import {connect} from "react-redux";
import {store} from "../index";

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    console.log('erta')
                    console.log(store.getState());
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type={'submit'}>Add Todo</button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo);
export default AddTodo;
