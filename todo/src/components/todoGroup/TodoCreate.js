import { useState } from "react";
import { useTodosPost } from "../../api/todoApi";
import { FormLabel, InputField, SubmitButton } from "../../widgets";
import Information from "../../utility/Information";

const TodoCreate = () => {
	const [assignee, setAssignee] = useState("");
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [todoAddSuccess, setTodoAddSuccess] = useState(null);
	const { makeTodo } = useTodosPost();

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await makeTodo(title, assignee, dueDate);
			setTodoAddSuccess(true);
		} catch {
			setTodoAddSuccess(false);
		} finally {
			setAssignee("");
			setTitle("");
			setDueDate("");
		}
	};

	return (
		<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
			<form onSubmit={onSubmit}>
				<div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4">
					<div className="mb-4">
						<FormLabel text="Assignee" />
						<InputField
							id="assignee"
							type="text"
							value={assignee}
							onChange={setAssignee}
						/>
					</div>
					<div className="mb-6">
						<FormLabel text="Title" />
						<InputField
							id="title"
							type="text"
							value={title}
							onChange={setTitle}
						/>
					</div>
					<div className="mb-6">
						<FormLabel text="Due Date" />
						<InputField
							id="dueDate"
							type="date"
							value={dueDate}
							onChange={setDueDate}
						/>
					</div>
				</div>
				<SubmitButton text="Add Task" color="blue" />
			</form>
			<Information status={todoAddSuccess} setStatus={setTodoAddSuccess} />
		</div>
	);
};

export default TodoCreate;
