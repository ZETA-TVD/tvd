import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import fire  from '../../config/fire';


	const Nav = styled.div`
		& {
			height: 10vh;
			background: #DA0037;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			display:flex;
			justify-content:space-between;
			align-items:center;
			gap:20px;
			padding:0px 50px;
		}
		&
	`;
	export class Navbar extends React.Component {
	constructor(props)
	{
		super(props);
		this.state={
			user:{}
		}
	}
	componentDidMount()
	{
		this.authListener();
	}
	authListener(){
		fire.auth().onAuthStateChanged((user)=>{
			if(user)
			{
				this.setState({user})
			}
			else{
				this.setState({user : null})
			}
		})
	}

	onSignOutClick = () => {
	  if (this.state.user) {
	    fire
	      .auth()
	      .signOut()
	  } 
	};
	render(){
	return (
		<Nav className="Navbar">
			{this.state.user?
				<div>
					<Link  to="/"> Home </Link>
					<div className="right ">
						{/*<Link className="element " to="/group"> Group</Link>*/}
						<Link className="element " to="/split"> Split</Link>
						<Link className="element "  onClick={this.onSignOutClick}>Log Out</Link>
					</div>
				</div>
				:
				<div>
					<Link to="/"> Home </Link>
					<div className="right">
						<Link className="element" to="/signin" > Sign In </Link>
						<Link className="element"  to="/register"> Sign Up </Link>
					</div>
				</div>}
		</Nav>
	);
}
};

