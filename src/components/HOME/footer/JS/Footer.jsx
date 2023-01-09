import { render } from "@testing-library/react";
import React, { Component } from "react";
import logo from "../font/images/logo.png"
import "../scss/Footer.scss"
export default class Footer extends Component {
    render(){
        return(
          <div>
  <div className="footerrrrr">
               
               <div className="logo-footer aa">
                   <img className="d" src={logo}/>
               </div>
               <div className="Coordonnees aa">
                  
                   <ul>
                   <h3>Coordonneés</h3>
                       <li><p>3630 Rue durocher</p></li>
                       <li><p>H2X 2E8</p></li>
                       <li><p>Montreal</p></li>
                     
                     
                   </ul>
               </div>
               <div className="Navigation aa">
              
                   <ul>
                   <h3>navigation</h3>
                       <li><p>CONNEXION</p></li>
                       <li><p>RÉSERVATIONS</p></li>
                       <li><p>BIOGRAPHIES DES AUTEURS</p></li>
                       <li><p>CLUB</p></li>
                  
                   </ul>
               </div>
               <div className="produit aa">
           
                   <ul>
                   <h3>PLUS D'INFOS</h3>
                   <li><p>(514)448 3572</p></li>
                       <li><p>yassine.ahmed.maalej@gmail.com</p></li>
                       <li><p>maalej22@gmail.com</p></li>
                  
                       
                   </ul>
               </div>
               <div></div> 
           
           </div>
            
          </div> 
 
        );
    }
}

 