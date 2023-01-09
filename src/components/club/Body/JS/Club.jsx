import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../scss/Club.scss"
import logo from "../../../HOME/header/font/images/logo.png"

export default class Club extends Component {
    render(){
        return(
          <div className="CLUB">
            
            <img src={logo}/>
             <div className="tchat">
                  <div className="msgs"> 

                  </div>
                  <div className="text">
                  <input type="text" required="required" className="textee"/>
                  <button className="envoyeer">envoyer</button>
                  </div>
             </div>
          </div> 
 
        );
    }
}