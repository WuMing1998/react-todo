import { createContext, Dispatch, FC, useEffect, useReducer } from "react"

import { List } from 'antd';

import TInput from "../components/Todo/Input"
import TItem from "../components/Todo/Item"
import reducer from "../components/Todo/reducer";
import { IAction, IState, ITodo } from "../components/Todo/typing";

export interface ITodoContext {
    state: IState,
    dispatch: Dispatch<IAction>
}

export const TodoContext = createContext({} as ITodoContext);

const initialState: IState = {
    todos: []
}

const init = (initailArg: IState): IState => {
    const todos = localStorage.getItem('todos')

    return {
        ...initailArg,
        todos: todos ? JSON.parse(todos) : initailArg.todos
    }
}

const Todo: FC = () => {
    console.log();
    const [state, dispatch] = useReducer(reducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state.todos));
    }, [state.todos])

    return (
        <TodoContext.Provider value={{ state: state, dispatch }}>
            <TInput></TInput>
            <List
                style={{ 'minWidth': 300,height:540,overflow:'auto' }}
                itemLayout="horizontal" //竖排列表
                dataSource={state.todos}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <TItem {...item}></TItem>
                    </List.Item>
                )}
            />

        </TodoContext.Provider>
    )
}

export default Todo