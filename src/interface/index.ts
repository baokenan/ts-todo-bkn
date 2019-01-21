export interface ITodoItem {
	contents: string,
	done: boolean,
	id: string
}
export interface ITodoProps {
	todoList: ITodoItem[]
} 
export interface ITodoState {
    todoList: ITodoItem[]
}
export interface ITodoHandleEvent {
    handleDeleteItem(id: string): void,
    handlechangeItemStatus(id: string): void,
}
export interface ITodoHandleAddItem{
    handleAddItem(value: string): any
}