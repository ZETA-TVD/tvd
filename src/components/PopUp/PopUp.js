import React from 'react';
import Popup from 'reactjs-popup';
import './PopUp.css';
import firebase from "../../config/fire";

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

	handleSubmit(event,close) {
		event.preventDefault();
		// console.log(this.state.formValues);
		const groupdetails = {
			group_name:this.state.formValues[0].groupname,
			members:this.state.formValues.map(member => {return{id:member.friendname, amount:0}})
		}
		const user = firebase.auth().currentUser;

		if(user.email)
		{
			groupdetails.members.push({id:user.email,amount:0});
		}
		firebase.firestore().collection("groups").add(
			groupdetails
		).then(()=>firebase.firestore().collection("users").where('email','in',groupdetails.members.map(member => member.id)).get().then(snap => snap.docs.forEach(doc => firebase.firestore().collection("users").doc(doc.id).update({groups: firebase.firestore.FieldValue.arrayUnion(groupdetails.group_name)}))));
		console.log(groupdetails.members.map(member => member.id));
		close();
		console.log(groupdetails);

	}

    render(){
        return(
        <Popup
            trigger={<button className="btn grow ba b--purple"> + </button>}
            modal
            nested
        >
            {close => (
                <div className="modal container11 br3 --navy">
                    
                    <form className="mainform">
						{this.state.formValues.map((element, index) => (
							<div className="formcontent" key={index}>
								{ index ?
								<div className="friendname">
									<input type="email" name="friendname"  placeholder="Enter your Friend's Name" value={element.friendname || ""} onChange={e => this.handleChange(index, e)} />
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
								<button className="button submit" type="submit" onClick={(e) => this.handleSubmit(e,close)}>Submit</button>
						</div>
				</form>
                </div>
            
            )}
        </Popup>
        )
    }
}

export default PopUp;