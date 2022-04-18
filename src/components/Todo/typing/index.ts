export interface ITodo {
    id: number,
    msg: string,
    toggle: boolean,
}

export type TODO_TYPE = 'insertTodo' | 'updateTodo' | 'deleteTodo' | 'toggleTodo'

export interface IAction {
    type: TODO_TYPE,
    payload: ITodo | number,
}