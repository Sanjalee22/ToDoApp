import { useState, useContext } from "react";
import axios from "axios";
import { TodoContext } from "../context/TodoProvider";

const BASE_URL = "http://localhost:3001";

//using an async-await call to APIs. This will not block other UI operations during
//the network request.

export const fetchATodo = async (todoId) => {
	const todoDetails = await axios.get(`${BASE_URL}/todos/${todoId}`);

	return todoDetails;
};

export const useTodosPost = () => {
	const { addTodos } = useContext(TodoContext);

	const makeTodo = async (title, assignee, dueDate) => {
		const response = await axios.post(
			`${BASE_URL}/todos`,
			{
				title: title,
				description: "",
				assignee: assignee,
				dueDate: dueDate,
				status: "Pending",
			},
			{
				headers: {
					"Content-type": "application/json",
				},
			}
		);

		addTodos(response.data);
	};

	return { makeTodo };
};

export const useTodosFetch = () => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const { resetAllTodos } = useContext(TodoContext);

	const fetchAllTodos = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/todos`);
			resetAllTodos(response.data);
		} catch {
			setError("An error occured while fetching the data");
		} finally {
			setLoading(false);
		}
	};
	return { fetchAllTodos, error, setError, loading };
};

export const useTodosUpdate = () => {
	const { updateTodo } = useContext(TodoContext);

	const performUpdate = async (
		id,
		title,
		description,
		assignee,
		dueDate,
		status
	) => {
		const response = await axios.patch(
			`${BASE_URL}/todos/${id}`,
			{
				title: title,
				description: description,
				assignee: assignee,
				dueDate: dueDate,
				status: status,
			},
			{
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		updateTodo(response.data);
	};
	return { performUpdate };
};

export const useTodosDelete = () => {
	const { deleteTodo } = useContext(TodoContext);

	const performDelete = async (id) => {
		await axios.delete(`${BASE_URL}/todos/${id}`);
		deleteTodo(id);
	};
	return { performDelete };
};
