import { FC, useCallback, useContext, useDeferredValue, useState } from "react"
import { Input, InputProps, message } from 'antd';
import { TodoContext } from "../../pages/Todo";

const TInput: FC = () => {

    const [val, setVal] = useState<string>('');
    const deferredVal = useDeferredValue(val);

    const { state: { todos }, dispatch } = useContext(TodoContext)

    const InputHanlder: InputProps['onPressEnter'] = useCallback(() => {
        const msg = deferredVal.trim();
        if (!msg) return;
        const todoRe = todos.find((todo) => {
            return todo.msg === msg
        })
        if (!todoRe) {
            dispatch({
                type: 'insertTodo', payload: {
                    id: todos.length + 1,
                    msg: deferredVal.trim(),
                    toggle: false,
                }
            })
            setVal('');
        } else {
            message.info('请勿重复添加');
        }
    }, [deferredVal])
    return (
        <>
            <Input style={{ 'minWidth': 300 }} value={deferredVal} placeholder="do somthing" onChange={(e) => setVal(e.target.value)} onPressEnter={InputHanlder} />
        </>
    )
}

export default TInput