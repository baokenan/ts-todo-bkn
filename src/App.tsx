import * as React from 'react';
import Footer from './footer';
import Header from './header';
import { ITodoItem, ITodoState } from './interface';
import TodoList from './todoList';
// import update from 'immutability-helper';
export default class App extends React.Component {
	public readonly state: Readonly<ITodoState> = {
		todoList: []
	}

	public render() {
		return (
			<div className="App">
				<Header handleAddItem={this.handleAddItem} />
				{this.state.todoList.length ? <TodoList
					todoList={this.state.todoList}
					handleDeleteItem={this.handleDeleteItem}
					handlechangeItemStatus={this.handlechangeItemStatus}
				/> : this.renderNoTodo()}
				<Footer todoList={this.state.todoList} />
			</div>
		);
	}
	// 渲染无todo
	private renderNoTodo() {
		return <div className='noTodo'>no todo! add one!</div>;
	}
	// 添加一项todo
	private handleAddItem = (value: string): void => {
		const defaultList: ITodoItem[] = [{
			contents: value,
			done: false,
			id: value + Math.random()
		}];

		this.setState({ todoList: this.state.todoList.concat(defaultList) });
	}
	// 删除一项todo
	private handleDeleteItem = (id: string): void => {
		const newDataList = this.state.todoList.filter(item => item.id !== id);

		this.setState({ todoList: newDataList });
	}
	// 改变完成状态
	private handlechangeItemStatus = (id: string): void => {
		const newDataList = JSON.parse(JSON.stringify(this.state.todoList));

		newDataList.forEach((item: any) => {
			if (item.id === id) { item.done = !item.done };
		});

		this.setState({ todoList: newDataList });
	}
}