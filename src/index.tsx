import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ITodoProps } from './interface';;
import { createStore } from 'redux';
import { TodoAction } from '../src/reducers/ts-todo/actions';
import { Todo } from '../src/reducers/ts-todo/reducer';
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore<ITodoProps, TodoAction, {}, {}>(Todo, {
	todoList: [],
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
