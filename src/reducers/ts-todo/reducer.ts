import { ADD, CHANGE, DELETE } from './const';
import { ITodoState } from '../../interface';

const initState: ITodoState = {
    todoList: []
}

export const Todo = (state = initState, action: any) => {
    const index = state.todoList.findIndex(item => item.id === action.id);

    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                todoList: [...state.todoList, action.response]
            });
        case DELETE:
            return Object.assign({}, state, {
                todoList: [
                    ...state.todoList.slice(0, index),
                    ...state.todoList.slice(index + 1)
                ]
            });
        case CHANGE:            
            return Object.assign({}, state, {
                todoList: [
                    ...state.todoList.slice(0, index),
                    Object.assign({}, state.todoList[index], { done: !state.todoList[index].done}),
                    ...state.todoList.slice(index + 1)
                ]
            });
        default:
            return state;
    }
};