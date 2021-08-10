import { render } from '@testing-library/react';
import React from 'react';
import Popup from 'reactjs-popup';
import './PopUpexpense.css';

class PopUpexpense extends React.Component{
    constructor(props) {
		super(props) 
		this.state =  
		{ title: "", paidby: "", amount: "", splitamong: "" };
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	 
	handleSubmit(event) {
		event.preventDefault();
		alert(JSON.stringify(this.state.formValues));
	}

    render(){
    	console.log(this.state.formValues)
        return(
        <Popup
            trigger={<button className="btn grow ba b--purple"> + </button>}
            modal
            nested
        > 
            {close => (
                <div className="modal container5">
                    
                    <form className="mainform" onSubmit={this.handleSubmit}>
						
							<div className="formcontent">
								<div>
									<div className="groupname">
										<input type="text" name="Title" className= "grp" placeholder=" Enter Title" value={this.state.title || ""} onChange={e => this.setState({title:e.target.value})} />	
									</div>
									<div className="groupname">
										<input type="text" name="Paid By" className= "grp" placeholder="Paid By" value={this.state.paidby || ""} onChange={e => this.setState({paidby:e.target.value})} />	
									</div>
									<div className="groupname">
										<input type="number" name="Amount" className= "grp" placeholder=" Enter Amount" value={this.state.amount || ""} onChange={e => this.setState({amount:e.target.value})} />	
									</div>
									
								</div>
						
							</div>
						
						<div className="button-section">

								<button className="button submit" type="submit">Submit</button>
						</div>
				</form>
                </div>
            
            )}
        </Popup>
        )
    }
}

export default PopUpexpense;