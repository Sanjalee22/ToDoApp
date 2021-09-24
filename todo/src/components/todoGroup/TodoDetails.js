import React, { useState, Suspense, lazy, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Text } from "../../widgets";

const TodoEdit = lazy(() => import("./TodoEdit"));
const TodoMoreDetails = lazy(() => import("./TodoMoreDetails"));
const TodoDelete = lazy(() => import("./TodoDelete"));
const Modal = lazy(() => import("../Modal"));

const TodoDetails = ({ todo }) => {
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDetailsModal, setShowDetailsModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [color, setColor] = useState("");

	const getColorBasedOnStatus = () => {
		switch (todo.status) {
			case "Done": {
				setColor("green");
				break;
			}
			case "Pending": {
				setColor("yellow");
				break;
			}
			case "Blocked": {
				setColor("red");
				break;
			}
			default:
				setColor("yellow");
		}
	};

	useEffect(() => {
		getColorBasedOnStatus();
	});

	const getComponent = () => {
		if (showEditModal)
			return (
				<Modal heading="Edit Task" setShowModal={setShowEditModal}>
					<TodoEdit todo={todo} />
				</Modal>
			);
		else if (showDetailsModal)
			return (
				<Modal heading="Task Details" setShowModal={setShowDetailsModal}>
					<TodoMoreDetails todo={todo} />
				</Modal>
			);
		else if (showDeleteModal)
			return (
				<Modal heading="Delete Task" setShowModal={setShowDeleteModal}>
					<TodoDelete id={todo.id} />
				</Modal>
			);
		else return null;
	};

	const loadingComponent = <div>Loading</div>;

	return (
		<div
			className={`border-gray-200 rounded-lg p-4 border bg-${color}-50 hover:bg-${color}-100 hover:border-transparent hover:shadow-lg`}
		>
			<div className="leading-6 font-medium text-black text-center">
				{todo.title}
			</div>
			<div className="grid grid-cols-4">
				<Text text="Assignee:" addStyle="" />
				<Text text={todo.assignee} addStyle="col-span-3" />
				<Text text="Due Date:" addStyle="" />
				<Text text={todo.dueDate} addStyle="col-span-3" />
				<Text text="Status:" addStyle="" />
				<Text text={todo.status} addStyle="col-span-3" />
			</div>
			<div className="text-right space-x-0.5">
				<Button
					text="Edit"
					color="pink"
					onClick={() => {
						setShowEditModal(true);
					}}
				/>
				<Button
					text="Details"
					color="pink"
					onClick={() => {
						setShowDetailsModal(true);
					}}
				/>
				<Button
					text="Delete"
					color="red"
					onClick={() => {
						setShowDeleteModal(true);
					}}
				/>
			</div>

			<div>
				<Suspense fallback={loadingComponent}>{getComponent()}</Suspense>
			</div>
		</div>
	);
};

TodoDetails.propTypes = {
	todo: PropTypes.object,
};

export default TodoDetails;
