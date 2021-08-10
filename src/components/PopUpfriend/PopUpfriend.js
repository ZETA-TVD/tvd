import { render } from '@testing-library/react';
import React from 'react';
import Popup from 'reactjs-popup';
import './PopUpfriend.css';

class PopUpfriend extends React.Component{
    constructor(props) {
		super(props) 
		this.state =  
		{ friendemail: "" };
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
            trigger={<button className="btn1 grow ba b--purple"> + </button>}
            modal
            nested
        >
            {close => (
                <div className="modal container6">
                    
                    <form className="mainform" onSubmit={this.handleSubmit}>
						
							<div className="formcontent">
								<div>
									
									<div className="groupname">
										<input type="email" name="friendemail" className= "grp" placeholder="Enter friend's email" value={this.state.friendemail || ""} onChange={e => this.setState({friendemail:e.target.value})} />	
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

export default PopUpfriend;