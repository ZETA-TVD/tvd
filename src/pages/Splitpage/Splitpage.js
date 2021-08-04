import React from "react";
import "./Splitpage.css";
import { GroupCard } from "../../components/GroupCard/GroupCard.js";
import {Carousel} from '3d-react-carousal';

export class Splitpage extends React.Component{
    render(){
 const slides= [
                            <div className="flex">
                                <GroupCard name={"Tharvadu"}/>
                                <GroupCard name={"kuli"}/>
                                <GroupCard name={"sasti"}/>
                            </div>,
                            <div className="flex">
                                <GroupCard name={"vantony"}/>
                                <GroupCard name={"govi"}/>
                                <GroupCard name={"suni"}/>
                            </div>];
        return (
        <div className="container1">
                <div className="groups">
                        <div className="heading">
                            <h1> Groups</h1>
                        </div>  
                        <Carousel slides={slides} autoplay={false} interval={1000}/>
                </div>
                <div className="friends">
                        <div className="heading">
                            <h1> Groups</h1>
                        </div>  
                        <Carousel slides={slides} autoplay={false} interval={1000}/>
                </div>
        
        </div>
    );
}
};  