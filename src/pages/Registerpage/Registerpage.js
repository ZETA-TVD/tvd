import React from "react";
import { SignInForm } from "../../components/SignUpForm/SignUpForm";
import ".././Signinpage/signinpage.css";
import Tilt from 'react-tilt'

export const Registerpage = () => {
	return (
		<div className="limiter">
			<Tilt className="Tilt">
		 		<div className="login100-pic">
					<div className="Tilt-inner"></div>
		 		</div>
		 	</Tilt>
			<SignInForm heading={"Sign Up"} />
		</div>
	);
};
