import React from "react";

export const FormLabel = ({ text }) => {
	return (
		<label
			className="block text-gray-700 text-sm font-bold mb-2"
			htmlFor={text}
		>
			{text}
		</label>
	);
};

export const Text = ({ text, addStyle }) => {
	return (
		<div
			className={`inline-block text-sm text-gray-500 font-medium sm:mb-4 lg:mb-0 xl:mb-4 ${addStyle}`}
		>
			{text}
		</div>
	);
};

export const InputField = ({ id, type, value, onChange }) => {
	return (
		<input
			className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id={id}
			name={id}
			type={type}
			value={value}
			aria-label={id}
			required
			onChange={(e) => {
				onChange(e.target.value);
			}}
		></input>
	);
};

export const Button = ({ text, color, onClick }) => {
	return (
		<button
			className={`text-white px-2 font-bold rounded focus:outline-none focus:shadow-outline bg-${color}-400`}
			onClick={() => {
				onClick();
			}}
		>
			{text}
		</button>
	);
};
export const SubmitButton = ({ text, color }) => {
	return (
		<div className="text-right">
			<button
				className={`text-white px-2 font-bold rounded focus:outline-none focus:shadow-outline bg-${color}-400`}
				type="submit"
			>
				{text}
			</button>
		</div>
	);
};

export const TextArea = ({ id, rows, column, value, onChange }) => {
	return (
		<textarea
			className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id={id}
			name={id}
			rows={rows}
			cols={column}
			value={value}
			onChange={(e) => {
				onChange(e.target.value);
			}}
		/>
	);
};

export const Dropdown = ({ options, id, selected, onChange }) => {
	const renderOptions = () => {
		return options.map((option) => {
			if (option === selected)
				return (
					<option key={option} value={option} selected>
						{option}
					</option>
				);
			return (
				<option key={option} value={option}>
					{option}
				</option>
			);
		});
	};
	return (
		<select
			className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			name={id}
			id={id}
			onChange={(e) => {
				onChange(e.target.value);
			}}
		>
			{renderOptions()}
		</select>
	);
};
