import InformationContainer from "../widgets/InformationContainer";
const Information = ({ status, setStatus }) => {
	if (status != null) {
		if (status)
			return (
				<InformationContainer
					message={"Action performed successfully"}
					color="green"
					setStatus={setStatus}
				/>
			);
		else
			return (
				<InformationContainer
					message={"Serverr error occured. Failed to perform action"}
					color="red"
					setStatus={setStatus}
				/>
			);
	} else return null;
};

export default Information;
