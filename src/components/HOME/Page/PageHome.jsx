 
import React, { Component } from "react";
import { Outlet } from "react-router";
import Club from "../../club/Body/JS/Club";
import Inscription from "../../inscription/Body/JS/Inscription";
 
import Reservation from "../../Reservation/JS/Reservation";
import Body from "../Body/JS/Body";
import Footer from "../footer/JS/Footer";
import Header from "../header/JS/Header";
import "./PageHome.scss"
 
 

export default class PageHome extends Component {
    render(){
        return(
 
          <div className="PageHome">
 
    
       <Header/>   
        <Outlet/>
       <Footer/>  
  
   {/* <Body />    
         <Reservation/>   */}
     
 
       
          </div> 
  
        );
    }
}