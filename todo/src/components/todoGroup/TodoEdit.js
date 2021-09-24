import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTodosUpdate } from "../../api/todoApi";
import Information from "../../utility/Information";
import {
	Dropdown,
	FormLabel,
	InputField,
	SubmitButton,
	TextArea,
} from "../../widgets";
import { statusValues } from "../../utility";
const TodoEdit = ({ todo }) => {
	const [assignee, setAssignee] = useState(todo.assignee);
	const [title, setTitle] = useState(todo.title);
	const [dueDate, setDueDate] = useState(todo.dueDate);
	const [status, setStatus] = useState(todo.status);
	const [description, setDescription] = useState(todo.description);
	const [editSuccess, setEditSuccess] = useState(null);
	const { performUpdate } = useTodosUpdate();
	const onSubmit = (e) => {
		e.preventDefault();
		try {
			performUpdate(todo.id, title, description, assignee, dueDate, status);
			setEditSuccess(true);
		} catch {
			setEditSuccess(false);
		}
	};
	return (
		<div>
			<form
				className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full"
				onSubmit={onSubmit}
			>
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
					<div className="mb-6">
						<FormLabel text="Title" />
						<InputField
							id="title"
							type="text"
							value={title}
							onChange={setTitle}
						/>
					</div>
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
						<FormLabel text="Due Date" />
						<InputField
							id="dueDate"
							type="date"
							value={dueDate}
							onChange={setDueDate}
						/>
					</div>
					<div className="mb-6">
						<FormLabel text="Status" />
						<Dropdown
							options={Object.values(statusValues)}
							id="status"
							selected={todo.status}
							onChange={setStatus}
						/>
					</div>
					<div className="mb-6 col-span-2">
						<FormLabel text="Description" />
						<TextArea
							id="description"
							rows={5}
							column={80}
							value={description}
							onChange={setDescription}
						/>
					</div>
				</div>
				<SubmitButton text="Save Changes" color="blue" />
			</form>
			<Information status={editSuccess} setStatus={setEditSuccess} />
		</div>
	);
};

TodoEdit.propTypes = {
	todo: PropTypes.object,
};

export default TodoEdit;
