import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import firebase  from '../../config/fire';

export const Navbar = () => {
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
	const onSignOutClick = () => {
	  if (currentUser) {
	    firebase
	      .auth()
	      .signOut()
	  } else history.push("/register");
	};
	return (
		<Nav className="Navbar">
			<Link to="/"> Home </Link>
			<Link className="element" to="/group"> Group</Link>
			<Link className="element" to="/split"> Split</Link>
			<div className="signin-signup">
				<Link to="/signin" className="link auth">
				        {currentUser
				          ? `Hey ${currentUser.displayName.split(" ")[0]}!`
				          : "Sign In"}
				 </Link>
				<Link className="link signup" onClick={onSignOutClick}>
				        {currentUser ? "Sign Out" : "Sign Up"}
				</Link>
			</div>
		</Nav>
	);
};
