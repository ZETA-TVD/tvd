import React from "react";
import "./GroupCard.css";
import { Link } from "react-router-dom";

export const GroupCard =({name}) =>{
    return(
      <div>
      {name?
        <div className="card">
        <Link className="grpbutton" style={{ textDecoration: 'none' }} to="/group"> 
          <article className="mw5 center  b5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                          <div class="tc">
                                <img alt='robots' src={`https://robohash.org/${name}?`} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                                <h1 className="f3 mb2">{name}</h1>
                          </div>
            </article>
          </Link>
        </div>:null}
        </div>
        );
}  