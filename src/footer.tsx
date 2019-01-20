import * as React from 'react';
import { ITodoProps } from './interface';

export default class Footer extends React.Component<ITodoProps, {}> {
    public render() {
        return (
            <div className='footer'>
                <span>done:<b>{this.props.todoList.filter(item => item.done).length}</b></span>
                <span>todo:<b className='unDone'>{this.props.todoList.filter(item => !item.done).length}</b></span>
            </div>
        );
    }
}