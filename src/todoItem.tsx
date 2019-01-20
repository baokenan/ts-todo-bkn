import * as React from 'react';
import { ITodoHandleEvent, ITodoItem } from './interface';

export default class TodoList extends React.Component<ITodoItem & ITodoHandleEvent,{}> {
    public render() {
        const done = this.props.done ? 'done' : '';

        return (
            <li className={done}>
                <span>{this.props.contents}</span>
                <span className='active'>
                    <button onClick={this.handleDeleteItem}>del</button>
                    <button onClick={this.handlechangeItemStatus}>{this.props.done ? 'todo' : 'done'}</button>
                </span>
            </li>
        );
    }

    private handleDeleteItem = (): void => {
        this.props.handleDeleteItem(this.props.id);
    }

    private handlechangeItemStatus = (): void => {
        this.props.handlechangeItemStatus(this.props.id);
    }
}