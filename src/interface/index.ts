export interface ITodoItem {
	contents: string,
	done: boolean,
	id: string
}

// export type ITodoProps = {
// 	todoList: ITodoItem[]
// } & ITodoHandleEvent;

export interface ITodoProps {
	todoList: ITodoItem[]
}


export interface ITodoState {
	todoList: ITodoItem[],
	inputValue: string,
}

export interface ITodoHandleEvent {
    handleDeleteItem(id: string): void,
    handlechangeItemStatus(id: string): void 
}