import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		console.log("Child Constructoe");
	}

	componentDidMount() {
		console.log("child componentDidMount");
	}

	render() {
		console.log("Child Render");
		return (
			<div className="user-card">
				<h2>Count:{this.state.count}</h2>
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					Count Increment
				</button>
				<h2>Name:{this.props.name}</h2>
				<h3>Location:{this.props.location}</h3>
				<h4>Phone:{this.props.phone}</h4>
			</div>
		);
	}
}

export default UserClass;
