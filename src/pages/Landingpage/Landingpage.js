import React from "react";
import "./Frontpage.stysle.scss";
import Typewriter from 'typewriter-effect';

export const Landingpage = () => {
	return (
		<div className="container">
			<div className="Main-text">
				<p>
				Keeping track of balances <br/>& shared expenses
				<Typewriter
					options={{
						strings: ['with friends', 'with your loved ones','on trips'],
						autoStart: true,
						loop: true,
						delay: 90,
						deleteSpeed: 150,
					}}
				/>
				</p>
				
			</div>
			<div className="Image"></div>
    	</div>
	)
};
