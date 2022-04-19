import Item from "antd/lib/list/Item";
import { IAction, IState, ITodo, TODO_TYPE } from "./typing"

export default (state: IState = { todos: [] }, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.id !== payload as number
                })
            }
        case 'updateTodo':
            const { id, msg } = payload as ITodo;
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return todo.id === id ? { ...todo, msg } : todo;
                })
            }
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.filter((item) => {
                    return item.id === payload ? { ...item, toggle: !item.toggle } : item
                })
            }

        case 'insertTodo':
            return {
                ...state,
                todos: [...state.todos, payload as ITodo]
            }
        default:
            return state
    }
}