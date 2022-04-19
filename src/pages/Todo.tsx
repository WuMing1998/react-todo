import { createContext, Dispatch, FC, useReducer } from "react"

import { List } from 'antd';

import TInput from "../components/Todo/Input"
import TItem from "../components/Todo/Item"
import reducer from "../components/Todo/reducer";
import { IAction, IState, ITodo } from "../components/Todo/typing";

export interface ITodoContext {
    state: IState,
    dispatch: Dispatch<IAction>
}

const initialState:IState = {
    todos:[]
}
export const TodoContext = createContext({} as ITodoContext);

const Todo: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{ state:state, dispatch }}>
            <TInput></TInput>
            <List
                style={{ 'minWidth': 300 }}
                itemLayout="horizontal" //竖排列表
                dataSource={state.todos}
                renderItem={item => (
                    <List.Item>
                        <TItem {...item}></TItem>
                    </List.Item>
                )}
            />

        </TodoContext.Provider>
    )
}

export default Todo