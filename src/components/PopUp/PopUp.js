import { render } from '@testing-library/react';
import React from 'react';
import Popup from 'reactjs-popup';
import './PopUp.css';

class PopUp extends React.Component{
    constructor(props) {
		super(props) 
		this.state = { 
			 formValues: [{ groupname: "", friendname : "" }]
		 };
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	 
	handleChange(i, e) {
		let formValues = this.state.formValues;
		formValues[i][e.target.name] = e.target.value;
		this.setState({ formValues });
	}

	addFormFields() {
		this.setState(({
			formValues: [...this.state.formValues, { friendname: ""}]
		}))
	}

	removeFormFields(i) {
		let formValues = this.state.formValues;
		formValues.splice(i, 1);
		this.setState({ formValues });
	}

	handleSubmit(event) {
		event.preventDefault();
		alert(JSON.stringify(this.state.formValues));
	}

    render(){
        return(
        <Popup
            trigger={<button className="btn grow ba b--purple"> + </button>}
            modal
            nested
        >
            {close => (
                <div className="modal container3">
                    
                    <form className="mainform" onSubmit={this.handleSubmit}>
						{this.state.formValues.map((element, index) => (
							<div className="formcontent" key={index}>
								{ index ?
								<div className="friendname">
									<input type="text" name="friendname"  placeholder="Enter your Friend's Name" value={element.friendname || ""} onChange={e => this.handleChange(index, e)} />
									<button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>X</button> 
								</div>
								:
								<div>
									<div className="groupname">
										<input type="text" name="groupname" className= "grp" placeholder=" Group Name" value={element.groupname || ""} onChange={e => this.handleChange(index, e)} />	
									</div>
									<div className="friendname">	
										<input type="text" name="friendname" placeholder="Enter your Friend's Name"  value={element.friendname || ""} onChange={e => this.handleChange(index, e)} />
									</div>
								</div>
								}
							</div>
						))}
						<div className="button-section">
								<button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
								<button className="button submit" type="submit">Submit</button>
						</div>
				</form>
                </div>
            
            )}
        </Popup>
        )
    }
}

export default PopUp;