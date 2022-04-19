import { FC } from "react"
import { ITodo } from "./typing"

const TItem: FC<ITodo> = ({
    id,
    msg,
    toggle,
}) => {
    console.log(id,msg,toggle)
    return (
        <>
            
        </>
    )
}

export default TItem