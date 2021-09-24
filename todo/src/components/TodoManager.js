import { useEffect } from "react";
import TodoCreate from "./todoGroup/TodoCreate";
import { useTodosFetch } from "../api/todoApi";
import TodoListItems from "./todoGroup/TodoListItems";
const TodoManager = () => {
	const { fetchAllTodos } = useTodosFetch();

	useEffect(() => {
		fetchAllTodos();
	}, []);

	return (
		<div>
			<div>
				<TodoCreate />
			</div>
			<div>
				<TodoListItems />
			</div>
		</div>
	);
};

export default TodoManager;
