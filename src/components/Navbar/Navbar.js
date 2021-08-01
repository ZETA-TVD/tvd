import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";

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
	return (
		<Nav className="Navbar">
			<Link to="/"> Home </Link>
			<div className="signin-signup">
				<Link className="element" to="/signin"> Sign In </Link>
				<Link className="element" to="/register"> Register </Link>
			</div>
		</Nav>
	);
};
