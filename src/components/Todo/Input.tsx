import { FC } from "react"
import { Input } from 'antd';

const TInput: FC = () => {
    return (
        <>
            <Input style={{'minWidth':300}} placeholder="todo somthing" />
        </>
    )
}

export default TInput