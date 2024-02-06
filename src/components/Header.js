import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [LoginBtn, setLoginBtn] = useState("Login");

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} alt="Company-Logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>Cart</li>
					<button
						onClick={() => {
							LoginBtn === "Login"
								? setLoginBtn("Logout")
								: setLoginBtn("Login");
						}}
						className="login"
					>
						{LoginBtn}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
