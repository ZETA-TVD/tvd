import React from "react";
import "./Splitpage.css";
import { GroupCard } from "../../components/GroupCard/GroupCard.js";
import "react-responsive-carousel/lib/styles/carousel.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Woman1 } from "../../assets/woman1.jpg";
import { FriendCard } from "../../components/FriendCard/FriendCard.js";
import { Totalbalance } from "../../components/Totalbalance/Totalbalance.js";
import PopUp from "../../components/PopUp/PopUp";
import PopUpfriend from "../../components/PopUpfriend/PopUpfriend";
import firebase  from '../../config/fire';

export class Splitpage extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
		 groups:[]
		};		

	  }
      componentDidMount()
      {
          const uid= firebase.auth().currentUser.uid
          firebase.firestore().collection("users").doc(uid).get().then(doc=>{this.setState({groups:doc.data().groups})})
      }
      

    render() {
        console.log(this.state)
        return (
        <div className="container1">
        <Totalbalance totalamt="100"/>
                <div className="groups">
                        <div className="heading1">
                            <h1> Groups</h1>
                        </div>  
                        <Carousel>                            
                                <div className="car">
                                    {this.state.groups.slice(0,3).map(group =><GroupCard name={group}/>)}
                                </div>
                                 <div className="car">
                                 {this.state.groups.slice(3,6).map(group =><GroupCard name={group}/>)}
                                </div>
                                 <div className="car">
                                 {this.state.groups.slice(6,9).map(group =><GroupCard name={group}/>)}
                                </div>
                                 <div className="car">
                                 {this.state.groups.slice(9,12).map(group =><GroupCard name={group}/>)}
                                </div>
                        </Carousel>
                        <div className="AddPopUp">
                            <div>
                                <PopUp/>
                            </div>
                        </div>
                </div>

                <div className="friends">
                    <div className="heading1">
                        <h1>Friends</h1>
                    </div>
                    <div className="mainfriends">
                        <div>
                        <FriendCard name="Sasti Randi" amt="Rs.10" pic=""/>
                        <FriendCard name="Daddy Kul" amt="Rs.1000" pic=""/>
                        <FriendCard name="Member Anto" amt="Rs.101" pic=""/>
                        <FriendCard name="Gobi Manchurian" amt="Rs.19" pic=""/>
                        <FriendCard name="Sunapila" amt="Rs.27" pic=""/>
                        </div>
                        <div className="AddPopUp">
                            <div>
                                <PopUpfriend/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
};  