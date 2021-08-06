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
				<form  onSubmit={this.handleSubmit}>
					{this.state.formValues.map((element, index) => (
						<div className="form-inline" key={index}>
							{ index ?
							<div className="friendname">
								<label>Enter Friend Name</label>
								<input type="text" name="friendname" value={element.friendname || ""} onChange={e => this.handleChange(index, e)} />
							</div>
							:
							<div>
									<label>Enter Group Name</label>
									<input type="text" name="groupname" value={element.groupname || ""} onChange={e => this.handleChange(index, e)} />
									<label>Enter Friend Name</label>
									<input type="text" name="friendname" value={element.friendname || ""} onChange={e => this.handleChange(index, e)} />
							</div>
							}
							{
								index ? 
									<button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
								: null
							}
						</div>
					))}
					<div className="button-section">
							<button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
							<button className="button submit" type="submit">Submit</button>
					</div>
			</form>
		);
	}
}
