import * as React from 'react';
import * as ReactRedux from "react-redux";
import * as actions from '../src/reducers/ts-todo/actions';
import Footer from './footer';
import Header from './header';
import { ITodoState, ITodoHandleAddItem, ITodoHandleEvent } from './interface';
import TodoList from './todoList';
// import update from 'immutability-helper';
class App extends React.Component<ITodoState & ITodoHandleAddItem & ITodoHandleEvent, ITodoState, {}> {
	constructor(props: any) {
		super(props);
		this.state = {
			todoList: []
		}
	}
	
	public render() {
		const { todoList, handleAddItem, handleDeleteItem, handlechangeItemStatus } = this.props;
		
		return (
			<div className="App">
				<Header handleAddItem={handleAddItem} />
				{todoList.length ? <TodoList
					todoList={todoList}
					handleDeleteItem={handleDeleteItem}
					handlechangeItemStatus={handlechangeItemStatus}
				/> : this.renderNoTodo()}
				<Footer todoList={todoList} />
			</div>
		);
	}
	// 渲染无todo
	private renderNoTodo() {
		return <div className='noTodo'>no todo! add one!</div>;
	}
}

export const mapStateToProps = (state: any) => state;

export const mapDispatchToProps = (dispatch: any, ownProps: any) => {
	return {
		handleAddItem: (value: string): void => dispatch(actions.AddTodoItem(value)),
		handleDeleteItem: (value: string): void => dispatch(actions.DeleteTodoItem(value)),
		handlechangeItemStatus: (id: string): void => dispatch(actions.ChangeTodoItem(id))
	};
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);