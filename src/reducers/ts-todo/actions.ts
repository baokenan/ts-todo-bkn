import { ADD, DELETE, CHANGE } from './const';
// import { ITodoItem } from '../../interface';

export interface IAddTodoItem {
    type: ADD
}

export interface IDeleteTodoItem {
    type: DELETE;
}

export interface IChangeTodoItem {
    type: CHANGE;
}

export type TodoAction = IAddTodoItem | IDeleteTodoItem | IChangeTodoItem;

export const AddTodoItem = (value: string) => {
    return {
        type: ADD,
        response: {
            contents: value,
            done: false,
            id: value + Math.random()
        }
    };
};

export const DeleteTodoItem = (id: string) => {
    return {
        type: DELETE,
        id
    };
}

export const ChangeTodoItem = (id: string) => {
    return {
        type: CHANGE,
        id
    };
}
