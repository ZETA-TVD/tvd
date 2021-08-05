import React from "react";
import "./FriendCard.css";

export const FriendCard =({name,amt,pic}) =>{
    return(
     <div className="groups1">
        <div className="pic">
            <img src={pic}/>
        </div>
        <div className="name">
            {name}
        </div>
        <div className="amt">
            {amt}
        </div>
    </div>
);
}
