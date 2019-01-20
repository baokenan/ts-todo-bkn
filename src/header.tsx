import * as React from 'react';
import { ITodoHandleAddItem } from './interface';
export default class Header extends React.Component<ITodoHandleAddItem, {}> {
    public readonly state = {
        inputValue: ''
    }

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className='header'>
                <input onChange={this.handleInputChange} value={this.state.inputValue} />
                <button onClick={this.handleAddItem}>add</button>
            </div>
        );
    }

    private handleInputChange = (): void => {
        const el: HTMLInputElement | any = document.querySelector('input');

        this.setState({ inputValue: el.value });
    }

    private handleAddItem = (): void => {
        const el: HTMLInputElement | any = document.querySelector('input');

        if (el.value !== '') { this.props.handleAddItem(el.value); }

        this.setState({ inputValue: '' }, (): void => { el.focus(); })
    }
}