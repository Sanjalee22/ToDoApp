import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../widgets";
const TodoMoreDetails = ({ todo }) => {
	return (
		<>
			<div className="leading-6 font-medium text-black text-center">
				{todo.title}
			</div>
			<div className="grid grid-cols-4 px-8">
				<Text text="Assignee:" addStyle="" />
				<Text text={todo.assignee} addStyle="col-span-3" />
				<Text text="Due Date:" addStyle="" />
				<Text text={todo.dueDate} addStyle="col-span-3" />
				<Text text="Status:" addStyle="" />
				<Text text={todo.status} addStyle="col-span-3" />
				<Text text="Description:" addStyle="" />
				<Text text={todo.description} addStyle="col-span-3" />
			</div>
		</>
	);
};

TodoMoreDetails.propTypes = {
	todo: PropTypes.object,
};

export default TodoMoreDetails;
