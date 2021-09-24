import React from "react";
import PropTypes from "prop-types";
import { useTodosDelete } from "../../api/todoApi";
import { FormLabel, SubmitButton } from "../../widgets";
const TodoDelete = ({ id }) => {
	const { performDelete } = useTodosDelete();
	const onSubmit = (e) => {
		e.preventDefault();
		try {
			performDelete(id);
		} catch {}
	};

	return (
		<form
			className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full"
			onSubmit={onSubmit}
		>
			<FormLabel text="Are you sure you want to delete this task?" />
			<SubmitButton text="Yes" color="red" />
		</form>
	);
};

TodoDelete.propTypes = {
	id: PropTypes.number,
};

export default TodoDelete;
