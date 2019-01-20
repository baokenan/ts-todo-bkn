import * as React from 'react';
import { ITodoHandleEvent, ITodoProps } from './interface';
import TodoItem from './todoItem';

export default class TodoList extends React.Component<ITodoProps & ITodoHandleEvent,{}> {
    public render() {
        return (
            this.props.todoList.map((item, index) => {
                return (
                    <TodoItem
                        {...item}
                        key={'todoItem_' + index}
                        handleDeleteItem={this.props.handleDeleteItem}
                        handlechangeItemStatus={this.props.handlechangeItemStatus}
                    />
                );
            })
        );
    }
}

// const TodoList: React.FunctionComponent<ITodoProps > = (props) => {
//     let {handleDeleteItem, handlechangeItemStatus} = props;

//         return (
//             props.todoList.map((item, index) => {
//                 return (
//                     <TodoItem
//                         {...item}
//                         key={'todoItem_' + index}
//                         handleDeleteItem={handleDeleteItem}
//                         handlechangeItemStatus={handlechangeItemStatus}
//                     />
//                 );
//             })
//         );
// }
// export default TodoList;