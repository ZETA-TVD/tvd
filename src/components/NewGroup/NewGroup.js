import React from "react";
import './NewGroup.css'

export class NewGroup extends React.Component {
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

	render() {

		return (
			<div className="container3">
					<form className="mainform" onSubmit={this.handleSubmit}>
						{this.state.formValues.map((element, index) => (
							<div className="formcontent" key={index}>
								{ index ?
								<div className="extrafriendname">
									
									<input type="text" name="friendname"  placeholder="Enter your Friend's Name" value={element.friendname || ""} onChange={e => this.handleChange(index, e)} />
									<button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
								</div>
								:
								<div>
										
										<input type="text" name="groupname" placeholder="Enter Group Name" value={element.groupname || ""} onChange={e => this.handleChange(index, e)} />	
										
										<input type="text" name="friendname" placeholder="Enter your Friend's Name"  value={element.friendname || ""} onChange={e => this.handleChange(index, e)} />
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
		);
	}
}
