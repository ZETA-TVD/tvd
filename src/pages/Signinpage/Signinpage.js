import React, { Component } from "react";
import  SignInForm  from "../../components/SignUpForm/SignUpForm";
import MoneyMan from "../../assets/moneyman.png";
import "./signinpage.css";
import Tilt from 'react-tilt'


class Signinpage extends Component {
	  
	render()
	{
		return(
			<div className="limiter">
			<Tilt className="Tilt">
		 		<div className="login100-pic">
					<div className="Tilt-inner"> <img src={MoneyMan} alt="man-laptop" /> </div>
		 		</div>
		 	</Tilt>
	 		<SignInForm heading={"Sign In"} />
		</div>
		)
	}
};

export default Signinpage;

/*

export const Signinpage = () => {
	return (
		<div className="limiter">
			<Tilt className="Tilt">
		 		<div className="login100-pic">
					<div className="Tilt-inner"> <img src={MoneyMan} alt="man-laptop" /> </div>
		 		</div>
		 	</Tilt>
	 		<SignInForm heading={"Sign In"} />
		</div>
	);
};*/
