import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
	const error = useRouteError();

	return (
		<div>
			<h1>Ooops! Somwthing went wrong</h1>
			<h1>
				{error.statusText} : {error.statusText}
			</h1>
			<h2>{error.data}</h2>
		</div>
	);
};

export default ErrorComponent;
