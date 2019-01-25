import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({onclick, completed, text}) => (
    <li
        onClick={onclick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>

);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};
