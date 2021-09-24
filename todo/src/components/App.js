import TodoManager from "./TodoManager";
import TodoProvider from "../context/TodoProvider";

const App = () => {
	return (
		<div>
			<TodoProvider>
				<TodoManager />
			</TodoProvider>
		</div>
	);
};

export default App;
