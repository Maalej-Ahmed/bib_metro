 
import React, { Component } from "react";
import store from "../../../../Store";
import { Provider } from "react-redux";
import Connexion from "../../../connexion/Body/JS/Connexion";
import BG from "../Atoms/bg/BG";
import Body_2 from "../Atoms/parti_2/Parti_2";

 
 

export default class Body extends Component {
    render(){
        return(
          <>         
    
          <div className="Body">
          
           <BG/>

            <Body_2/>
             
   

    

    
          </div> 
          </>

        );
    }
}