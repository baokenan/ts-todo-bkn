import * as React from 'react';
import Footer from './footer';
import { ITodoItem, ITodoState} from './interface';
import TodoList from './todoList';
// import update from 'immutability-helper';
export default class App extends React.Component {
	public readonly state: Readonly<ITodoState> = {
		todoList: [{
			contents: 'todo1',
			done: false,
			id: 'todo1'
		}, {
			contents: 'todo2',
			done: false,
			id: 'todo2'
		}],
		inputValue: ''
	}

	public render() {
		return (
			<div className="App">
				<input onChange={this.handleInputChange} value={this.state.inputValue}/>
				<button onClick={this.handleAddItem}>add</button>
				<ul className="todoList">
					{this.state.todoList.length ? <TodoList
						todoList={this.state.todoList}
						handleDeleteItem={this.handleDeleteItem}
						handlechangeItemStatus={this.handlechangeItemStatus}
					/> : this.renderNoTodo()}
				</ul>
				<Footer todoList={this.state.todoList} />
			</div>
		);
	}

	private renderNoTodo() {
		return <div className='noTodo'>no todo! add one!</div>
	}
	// 添加一项todo
	private handleAddItem = (): void => {
		if (this.state.inputValue === '') { return; }

		const el: HTMLInputElement | any = document.querySelector('input');

		const defaultList: ITodoItem[] = [{
			contents: this.state.inputValue,
			done: false,
			id: this.state.inputValue + Math.random()
		}]
		
		this.setState({
			todoList: this.state.todoList.concat(defaultList),
			inputValue: ''
		},() => {
			el.focus();
		})
	}
	// 删除一项todo
	private handleDeleteItem = (id: string): void => {
		const newDataList = this.state.todoList.filter(item => item.id !== id);
		
		this.setState({
			todoList: newDataList
		})
	}
	// 改变完成状态
	private handlechangeItemStatus = (id: string): void => {
		const newDataList = JSON.parse(JSON.stringify(this.state.todoList));

		newDataList.forEach((item: any) => {
			if (item.id === id) { item.done = !item.done };
		});
		
		this.setState({
			todoList: newDataList
		})
	}
	// 输入框改变事件
	private handleInputChange = (): void => {
		const el: HTMLInputElement | any = document.querySelector('input');

		this.setState({
			inputValue: el.value
		})
	}
}