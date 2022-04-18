import { createContext, FC, useContext, useReducer } from "react"

import { List, Row, Col } from 'antd';

import TInput from "../components/Todo/Input"
import TItem from "../components/Todo/Item"
import reducer from "../components/Todo/reducer";
import { ITodo } from "../components/Todo/typing";

const initialState: ITodo[] = [
];

const Todo: FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const TodoContext = createContext({});

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <TInput></TInput>
            <List
                style={{'minWidth':300}}
                itemLayout="horizontal" //竖排列表
                dataSource={state}
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