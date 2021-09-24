import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import TodoDetails from "./TodoDetails";

const TodoListItems = () => {
	const { todos } = useContext(TodoContext);

	const renderTodoItems = () => {
		return Object.values(todos).map((todo) => {
			return <TodoDetails key={todo.id} todo={todo} />;
		});
	};

	return (
		<>
			<div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
				{renderTodoItems()}
			</div>
		</>
	);
};

export default TodoListItems;
