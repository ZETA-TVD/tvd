import React from "react";
import "./GroupPage.css";
import { GroupExpense } from "../../components/GroupExpense/GroupExpense.js";
import { FriendReport } from "../../components/FriendReport/FriendReport.js";
import PopUpexpense from "../../components/PopUpexpense/PopUpexpense";

export const GroupPage =() =>{
    return(
        <div class="container4"> 
            <div class="summary">
                <div class="heading">
                    <h2>Summary</h2>
                </div>
                <GroupExpense title="Charminaar" host="Kuli" hostamt="1000" splitamt="100"/>
                <GroupExpense title="ITC" host="Sasti"  hostamt="10070"  splitamt="1600"/>
                <GroupExpense title="FK" host="anty" hostamt="10080" splitamt="1700"/>
                <div className="AddPopUp">
                    <div>
                        <PopUpexpense/>
                    </div>
                </div>
            </div>

        <div class="report">
            <div class="heading">
                <h2>Report</h2>
            </div>
            <FriendReport person="Kul" personamt="100"/>
            <FriendReport person="Sasti" personamt="1020"/>
            <FriendReport person="Member" personamt="200"/>

        </div>
    </div>


        )
}