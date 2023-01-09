import { render } from "@testing-library/react";
import React, { Component } from "react";
 
 
 
import store from "../../../Store/index";
import Info from "../Atoms/info/Info";
import Livres from "../Atoms/Livres/Livres";
import Res_livres from "../Atoms/res-livres/Res_livres";
 import logobd from "../font/images/logo_BD.png"
import "../scss/Reservation.scss"

 
 

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          classname: "Reservation"
        };
      }
   
   
    render(){
        
        return(
  <>
          <div className="reservation_page">

            <div className="AA">
                    <Info/>
               <div className="livress">

                  <div>
                      <Res_livres/>
                  </div>
                  
                  <div className="DD">
                      <Livres/> 
                  </div>
                  
               </div>
 
            </div>
        
    // ------------------------
      
          <div className={this.state.classname}>
                 
   
           <div className="showmenu"></div>
            <div className="menushow_photo">
                <button onClick= {()=>{this.setState({classname:"reservation_after"})}} className="bt__1"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__2"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__3"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__4"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__5"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__6"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__7"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__8"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__9"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__10"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}}  className="bt__11"></button>
                 <button onClick= {()=>{this.setState({classname:"reservation_after"})}} className="bt__12"></button>
            </div>
            <div className="menushow_btn">
                <button onClick={()=>{this.setState({classname:"Reservation"})}} className="bt_1 BTT">
                <p>Bandes dessinées</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}} className="bt_2 BTT">
                <p>Dystopie</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_3 BTT">
                <p>Ecole</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_4 BTT">
                <p>Fantasy</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}} className="bt_5 BTT">
                <p>Horreur</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_6 BTT">
                <p>Roman historique</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_7 BTT">
                <p>Roman religieux</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}} className="bt_8 BTT">
                <p>Science fiction</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_9 BTT">
                <p>Sentimental</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_10 BTT">
                <p>Sobrenatural</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_11 BTT">
                <p>Sports</p>
                </button>
                <button onClick={()=>{this.setState({classname:"Reservation"})}}className="bt_12 BTT">
                <p>Suspense et action</p>
                </button>
          </div>
      
           </div>

          </div>
           </>
        );
 
    }
}