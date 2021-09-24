import { createContext, useState } from "react";
import _ from "lodash";

const addTodos = () => {};
const resetAllTodos = () => {};
const updateTodos = () => {};

const initialState = {
	todos: {},
	addTodos,
	resetAllTodos,
	updateTodos,
};

export const TodoContext = createContext(initialState);

const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState({});

	const addTodos = (todo) => {
		let todosAfterAdd = { ...todos, [todo.id]: todo };
		setTodos(todosAfterAdd);
	};

	const updateTodo = (todo) => {
		let updatedTodos = { ...todos, [todo.id]: todo };
		setTodos(updatedTodos);
	};

	const deleteTodo = (id) => {
		let todoAfterDelete = _.omit(todos, id);
		setTodos(todoAfterDelete);
	};

	const resetAllTodos = (todoList) => {
		setTodos(_.mapKeys(todoList, "id"));
	};

	return (
		<TodoContext.Provider
			value={{ todos, addTodos, resetAllTodos, updateTodo, deleteTodo }}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
