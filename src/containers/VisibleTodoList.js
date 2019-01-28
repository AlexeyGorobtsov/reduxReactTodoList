import {TodoList} from "../components/TodoList";
import { connect } from "react-redux";
import {addTodo, toggleTodo} from "../actions";
import {store} from "../index";


const getVisibleTodos = (todos, filter) =>{
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
};

     console.log(mapStateToProps(0))
     console.log(mapDispatchToProps(0))
    // console.log(TodoList)


export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
