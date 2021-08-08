import React from "react";
import "./FriendReport.css";

export const FriendReport =({person,personamt}) =>{
    return( 
            <div class="rep1">
                <div class="name">
                    <h3>{person}</h3>
                </div>
                <div class="amount">
                    <h5>Gets back Rs.{personamt}</h5>
                </div>
            </div>
        );
}