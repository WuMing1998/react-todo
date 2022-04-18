import { IAction, ITodo,TODO_TYPE } from "./typing"

export default (state: ITodo[] = [], action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case 'deleteTodo':
            return state.filter((item) => {
                return item.id !== payload as number
            })
        case 'updateTodo':
            return state.filter((item) => {
                return item.id !== (payload as ITodo).id ? item : payload
            })
        case 'toggleTodo':
            return state.filter((item) => {
                if (item.id === payload as number)
                    item.toggle = !item.toggle
                return item
            })
        case 'insertTodo':
            return [...state, payload as ITodo]
        default:
            return state
    }
}