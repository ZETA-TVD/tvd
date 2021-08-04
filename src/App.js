import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { Registerpage } from "./pages/Registerpage/Registerpage";
import { Signinpage } from "./pages/Signinpage/Signinpage";
import { Splitpage } from "./pages/Splitpage/Splitpage.js";
import { Footer } from "./components/Footer/footer.component";

const App = () => {
	return (
	<div className="App">
		<Navbar />
		<div className="Main">
			<Switch>
				<Route path="/split" component={Splitpage} />
				 <Route path="/signin" component={Signinpage} />
				 <Route path="/register" component={Registerpage} />
				 <Route path="/" component={Landingpage} />
			</Switch>
		</div>
			
		<Footer/>
	</div>
	);
   };
   
   export default App;
   