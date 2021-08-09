import React from 'react';
import './Totalbalance.css';

export const Totalbalance=({totalamt}) => {
	return(
		<div className=" mw5 center measure f2 b5 br3 pa3 pa4-ns  ba  totalbalance">
			<div className="center">
				<div>
				<b>Overall, you are owed</b>
				</div>
				<div className="f1 amount"> 
				Rs. {totalamt}
				</div>
			</div>
		</div>
	)
}
