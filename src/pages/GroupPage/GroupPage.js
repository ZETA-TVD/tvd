import React,{useState,useEffect} from "react";
import "./GroupPage.css";
import { GroupExpense } from "../../components/GroupExpense/GroupExpense.js";
import { FriendReport } from "../../components/FriendReport/FriendReport.js";
import PopUpexpense from "../../components/PopUpexpense/PopUpexpense";
import { useParams } from "react-router";
import firebase from "../../config/fire";


const GroupPage =() =>{
    const [groups,setgroups] = useState(null)
    let {name} = useParams();

    useEffect(()=>{
        
        console.log(name);
        const uid= firebase.auth().currentUser.uid
        firebase.firestore().collection("groups").where('group_name','==',name).get().then(snap => snap.docs.forEach(doc => setgroups(doc.data())))
        //firebase.firestore().collection("users").where('email','in',groupdetails.members.map(member => member.id)).get().then(snap => snap.docs.forEach(doc => firebase.firestore().collection("users").doc(doc.id).update({groups: firebase.firestore.FieldValue.arrayUnion(groupdetails.group_name)})))
      },[])
      console.log(groups)
      

        return(
            <div class="container4"> 
                <div class="summary">
                    <div class="heading">
                        <h2> {name} </h2>
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
export default GroupPage
    