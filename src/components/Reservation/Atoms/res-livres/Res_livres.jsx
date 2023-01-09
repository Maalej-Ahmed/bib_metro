import React, { Component } from "react";
import { render } from "@testing-library/react";
import IMG1 from "../../font/images/logo_BD.png";
import "./Res__livres.scss";

export default class Res_livres extends Component 
 {
    render(){
        return(
            <>
            <div className="resLivr">
                <div className="list">

                    <img src={IMG1}alt="aa"className="card_img"/>
                    
                    <div className="livracheter"> 


                        <div className="articleacherter">

                        </div>
                        <div className="articleacherter">

                        </div>
                        <div className="articleacherter">

                        </div>
                        <div className="articleacherter">

                        </div>

                    </div>
                    <button>
               Reservation 
  
                    </button>
               
                 

                </div>
            </div>
            </>
        )
    }
 }
