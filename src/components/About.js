import User from "./User";
import UserClass from "./UserClass.Js";
import React from "react";

class About extends React.Component {

	constructor(props) {
        super(props);
		console.log("Parent Contructor")
    }

	componentDidMount() {
		console.log("Parent componentDidMount")
	}

	render() {
		console.log("Parent Render")
		return (
			<div>
				<h1>About Us</h1>

				<UserClass
					name={"Virat Kohli singh (Class Component)"}
					location={"Delhi"}
					phone={"+913999"}
				/>
			</div>
		);
	}
}

export default About;




// const About = () => {
// 	return (
// 		<div>
// 			<h1>About Us</h1>
// 			<User
// 				name={"Kishan Anchan (Function Component)"}
// 				location={"Hosmar"}
// 				phone={"7353206848"}
// 			/>

// 			<UserClass
// 				name={"Virat Kohli singh (Class Component)"}
// 				location={"Delhi"}
// 				phone={"+913999"}
// 			/>
// 		</div>
// 	);
// };


