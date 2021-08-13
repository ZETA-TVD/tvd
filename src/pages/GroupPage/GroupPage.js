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
                    <GroupExpense title="Cake" host="Abhinav" hostamt="1500" splitamt="300"/>
                    <GroupExpense title="Drinks" host="Amal"  hostamt="1000"  splitamt="200"/>
                    <GroupExpense title="Gaming" host="Tim" hostamt="800" splitamt="160"/>
                    <GroupExpense title="Food" host="Tim" hostamt="1000" splitamt="200"/>
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
                <FriendReport person="Amal" personamt="140"/>
                <FriendReport person="Abhinav" personamt="640"/>
                <FriendReport person="John" personamt="-860"/>
                <FriendReport person="Hari" personamt="-860"/>
                <FriendReport person="Tim" personamt="940"/>
    
            </div>
        </div>
    
    
            )
    }
export default GroupPage
    