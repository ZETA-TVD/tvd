import React, { Component } from "react";
import { SignInForm } from "../../components/SignUpForm/SignUpForm";
import MoneyMan from "../../assets/moneyman.png";
import "./signinpage.css";
import Tilt from 'react-tilt'

import fire from "../../config/fire";

class Signinpage extends Component {
	constructor(props)
	{
		super(props);
		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.signup = this.signup.bind(this);
		this.state={
			email : "",
			password: ""
		}			
	}
	login(e){
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
			console.log(u)
		}).catch((err)=>{
			console.log(err);
		})
	}
	signup(e){
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
			console.log(u)
		}).catch((err)=>{
			console.log(err);
		})
	}
	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}
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
}
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
