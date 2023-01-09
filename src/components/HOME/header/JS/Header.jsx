 
import React, { Component } from "react";
import Nav from "../Atoms/nav/Nav";
import logo from "../font/images/logo.png"
import "../scss/Header.scss"
import { Provider } from "react-redux";
import store from "../../../../Store";
import Connexion from "../../../connexion/Body/JS/Connexion";

export default class Header extends Component {
    render(){
        return(
          <div className="Header">
  
             <h1 className="section logo"> <img src={logo}/></h1>
             <h1 className="section nav">
        
         
               <Provider store={store}>
             
                 <Nav />
                  <Connexion/>
                </Provider>
             
              </h1>
             <h1 className="section utili"><div className="img-sercle"></div></h1>
             
          </div> 
 
        );
    }
}