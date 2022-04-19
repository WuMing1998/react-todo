import { FC, RefObject, useContext, useDeferredValue, useEffect, useRef, useState } from "react"
import { Checkbox, Input, Space, message, InputProps, InputRef } from 'antd';
import { DeleteFilled, EditOutlined } from '@ant-design/icons'

import { ITodo } from "./typing"
import { TodoContext } from "../../pages/Todo";

const TItem: FC<ITodo> = ({
    id,
    msg,
    toggle,
}) => {
    const [updateFlag, setUpdateFlag] = useState(false)
    const deferrelFlag = useDeferredValue(updateFlag)
    const { state: { todos }, dispatch } = useContext(TodoContext);

    const inputRef = useRef() as RefObject<InputRef>;

    useEffect(() => {
        if (deferrelFlag) {
            inputRef.current?.focus({ cursor: 'end' });
        }
    }, [deferrelFlag])

    const updateTodo: InputProps['onProgress'] = (e) => {
        const msg = (e.target as HTMLInputElement).value
        if (!msg) return;
        const todoRe = todos.find((todo) => {
            return todo.msg === msg
        })
        if (!todoRe) {
            dispatch({ type: 'updateTodo', payload: { id, msg, toggle } });
            setUpdateFlag(false);
        } else {
            message.info('数据项重复');
        }
    }
    return (
        <>
            <Checkbox checked={toggle} onChange={() => dispatch({ type: 'toggleTodo', payload: id })}>
                <Checkbox.Group>
                    {deferrelFlag ? <Input ref={inputRef} defaultValue={msg} onPressEnter={updateTodo} /> : msg}
                </Checkbox.Group>
            </Checkbox>
            <Space>
                <EditOutlined onClick={() => { setUpdateFlag(!deferrelFlag) }} />
                <DeleteFilled onClick={() => dispatch({ type: 'deleteTodo', payload: id })} />
            </Space>
        </>
    )
}

export default TItem