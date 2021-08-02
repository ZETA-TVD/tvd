import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import  'tachyons'
import background from "./assets/pattern.svg";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<div style={{ backgroundImage: `url(${background})` }}>
				<App />
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);



reportWebVitals();
