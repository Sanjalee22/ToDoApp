import { Button } from "../widgets";
import PropTypes from "prop-types";
const Modal = ({ heading, setShowModal, children }) => {
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className=" w-3/5">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none w-44">
						<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-3xl font-semibold">{heading}</h3>
							<button
								className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal(false)}
							>
								<span className="text-black h-6 w-6 block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						{children}
						<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
							<Button
								text="Close"
								color="blue"
								onClick={() => {
									setShowModal(false);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
};

Modal.prototype = {
	heading: PropTypes.string,
	children: PropTypes.element,
	setShowModal: PropTypes.function,
};

export default Modal;
