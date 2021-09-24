import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TodoCreate from "../components/todoGroup/TodoCreate";

describe("TodoCreate Tests", () => {
	afterEach(cleanup);

	it("renders assignee", () => {
		render(<TodoCreate />);
		const assignee = screen.queryByText("Assignee");
		expect(assignee).toBeInTheDocument;
	});

	it("renders Title", () => {
		render(<TodoCreate />);
		const title = screen.queryByText("Title");
		expect(title).toBeInTheDocument;
	});

	it("renders Due Date", () => {
		render(<TodoCreate />);
		const duedate = screen.queryByText("Due Date");
		expect(duedate).toBeInTheDocument;
	});

	it("renders text box for assignee", () => {
		render(<TodoCreate />);
		const textBox = screen.queryByLabelText("assignee");
		expect(textBox).toBeInTheDocument;
	});

	it("renders text box for title", () => {
		render(<TodoCreate />);
		const textBox = screen.queryByLabelText("title");
		expect(textBox).toBeInTheDocument;
	});

	it("renders text box for due date", () => {
		render(<TodoCreate />);
		const textBox = screen.queryByLabelText("dueDate");
		expect(textBox).toBeInTheDocument;
	});

	it("should show the assignee name in assignee text box", () => {
		render(<TodoCreate />);
		const assignee = screen.queryByLabelText("assignee");
		fireEvent.change(assignee, { target: { value: "Sanjalee" } });
		expect(assignee.value).toBe("Sanjalee");
	});

	it("should show the entered value title text box", () => {
		render(<TodoCreate />);
		const title = screen.queryByLabelText("title");
		fireEvent.change(title, { target: { value: "Learn ReactJS" } });
		expect(title.value).toBe("Learn ReactJS");
	});

	it("should show the entered date value date text box", () => {
		render(<TodoCreate />);
		const dueDate = screen.queryByLabelText("dueDate");
		fireEvent.change(dueDate, { target: { value: "2020-05-12" } });
		expect(dueDate.value).toBe("2020-05-12");
	});

	it("should render a submit button", () => {
		render(<TodoCreate />);
		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument;
	});
});
