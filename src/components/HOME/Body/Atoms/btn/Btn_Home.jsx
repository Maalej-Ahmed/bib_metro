import React, { Component } from "react";
import"./Btn_Home.scss";


export default class Btn_Home extends Component {
  render() {
    return (
      <>
        <div className="BTN"> 
        <a href="/inscription" className="animated-button"  >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              s'inscrire
            </a>
        </div>
      </>
    );
  }
}
