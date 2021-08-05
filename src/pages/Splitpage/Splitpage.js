import React from "react";
import "./Splitpage.css";
import { GroupCard } from "../../components/GroupCard/GroupCard.js";
import "react-responsive-carousel/lib/styles/carousel.css"; 
import { Carousel } from 'react-responsive-carousel';

export class Splitpage extends React.Component{
    render() {
        return (
        <div className="container1">
                <div className="groups">
                        <div className="heading">
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
                </div>

                <div className="friends">

                </div>
        </div>
    );
}
};  