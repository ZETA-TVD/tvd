import React from "react";
import "./GroupExpense.css";

export const GroupExpense =({title,host,hostamt,splitamt}) =>{
    return( 
            <div className="expense">
                <div>
                    <div className="title">
                        <h2> {title}</h2>
                    </div>
                    <div className="remark">
                        <h5>{host} paid Rs.{hostamt}</h5>
                    </div>
                </div> 
                <div className="remarks">
                    <h5 >You owe Rs.{splitamt}</h5>
                 </div>
            </div>
        );
}
