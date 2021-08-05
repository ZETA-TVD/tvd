import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { Registerpage } from "./pages/Registerpage/Registerpage";
import { Signinpage } from "./pages/Signinpage/Signinpage.js";
import { Splitpage } from "./pages/Splitpage/Splitpage.js";
import { Footer } from "./components/Footer/footer.component";

import fire from './config/fire';
import React, {Component } from 'react';


class App extends Component {
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




	render(){
		return (
			<div className="App">
		<Navbar />
		
		{this.state.user? (<Switch>
				<Route path="/split" component={ Splitpage } />
				 <Route path="/" component={ Landingpage } />
			</Switch>) : <Switch>
				 <Route path="/signin" component={ Signinpage } />
				 <Route path="/register" component={ Registerpage } />
				 <Route path="/" component={ Landingpage } />
			</Switch>}
			
		<Footer/>
	</div>
		)
	}
}
/*
const App = () => {
	return (
	<div className="App">
		<Navbar />
			<Switch>
				<Route path="/split" component={Splitpage} />
				 <Route path="/signin" component={Signinpage} />
				 <Route path="/register" component={Registerpage} />
				 <Route path="/" component={Landingpage} />
			</Switch>
		<Footer/>
	</div>
	);
   };*/
   
   export default App;
   