import { render } from "@testing-library/react";
import React, { Component } from "react";
import logo from "../../../HOME/header/font/images/logo.png"
import "../scss/Inscription.scss"

export default class Inscription extends Component {
    render(){
        return(
          <>        
          
          
          <div className="generale">

   
          <img src={logo}/>
          
            <div className="global">
             
              <div className="section1">
               
              <div className="inputBox">
                <input type="text" required="required"/>
                <span>PRÉNOM</span> 
                <i></i>
              </div>

              <div className="inputBox">
                <input type="text" required="required"/>
                <span>NOM</span> 
                <i></i>
              </div>
                             
              <div className="inputBox">
                <input type="text" required="required"/>
                <span>TÉLÉPHONE</span> 
                <i></i>
              </div>

              <div className="inputBox">
                <input type="DATE" required="required"/>
                <span>DATE DE NAISSANCE</span> 
                <i></i>
              </div>
              </div>
              
             < div className="section2">
               
               <div className="inputBox">
                 <input type="text" required="required"/>
                 <span>ADRESSE</span> 
                 <i></i>
               </div>
 
               <div className="inputBox">
                 <input type="text" required="required"/>
                 <span>VILLE</span> 
                 <i></i>
               </div>
                              
               <div className="inputBox">
                 <input type="text" required="required"/>
                 <span>PROVINCE</span> 
                 <i></i>
               </div>
 
               <div className="inputBox">
                 <input type="TEXT" required="required"/>
                 <span>CODE POSTAL</span> 
                 <i></i>
               </div>
               </div>
 
              
         
                <div className="section3">
               
               <div className="inputBox">
                 <input type="text" required="required"/>
                 <span>EMAIL</span> 
                 <i></i>
               </div>
 
               <div className="inputBox">
                 <input type="text" required="required"/>
                 <span>CONFIRMER EMAIL</span> 
                 <i></i>
               </div>
                              
               <div className="inputBox">
                 <input type="password" required="required"/>
                 <span>MOT DE PASSE</span> 
                 <i></i>
               </div>
 
               <div className="inputBox">
                 <input type="password" required="required"/>
                 <span>CONFIRMER MOT DE PASSE </span> 
                 <i></i>
               </div>
               </div>
 
          </div> 
          <button className="button-33" role="button">CONNEXION</button>
          </div>
          </>

        );
    }
}