import React from "react";
import "./Splitpage.css";
import { GroupCard } from "../../components/GroupCard/GroupCard.js";
import "react-responsive-carousel/lib/styles/carousel.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Woman1 } from "../../assets/woman1.jpg";
import { FriendCard } from "../../components/FriendCard/FriendCard.js";
import PopUp from "../../components/PopUp/PopUp";
import firebase  from '../../config/fire';

export class Splitpage extends React.Component{
    logout(){
        firebase.auth().signOut()
    }
    render() {
        return (
        <div className="container1">
                <div className="groups">
                        <div className="heading1">
                            <h1> Groups</h1>
                        </div>  
                        <Carousel>
                                <div className="car">
                                    <GroupCard name="Tharvadu"/>
                                    <GroupCard name="Tharvadu"/>
                                    <GroupCard name="Tharvadu"/>
                                </div>
                                 <div className="car">
                                    <GroupCard name="tvd"/>
                                    <GroupCard name="tvd"/>
                                    <GroupCard name="tvd"/>
                                </div>
                                 <div className="car">
                                    <GroupCard name="Tharvadu"/>
                                    <GroupCard name="Tharvadu"/>
                                    <GroupCard name="Tharvadu"/>
                                </div>
                                 <div className="car">
                                    <GroupCard name="Tharvadu"/>
                                    <GroupCard name="Tharvadu"/>
                                    <GroupCard name="Tharvadu"/>
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
                        <FriendCard name="Sasti Randi" amt="Rs.10" pic=""/>
                        <FriendCard name="Daddy Kul" amt="Rs.1000" pic=""/>
                        <FriendCard name="Member Anto" amt="Rs.101" pic=""/>
                        <FriendCard name="Gobi Manchurian" amt="Rs.19" pic=""/>
                        <FriendCard name="Sunapila" amt="Rs.27" pic=""/>
                    </div>
                </div>
                <button onClick={this.logout}>Logout</button>
        </div>
    );
}
};  