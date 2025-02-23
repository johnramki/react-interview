import React from 'react';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    toggleTodo
} from '../reducers/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    style={{
                        textDecoration: todo.completed ?
                            'line-through' : 'none'
                    }}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;