import React, { Component } from "react";
import { render } from "@testing-library/react";
import IMG1 from "../../font/images/bande_desinee.jpg";
import imgge2 from "../../font/images/imgge2.jpg";
import imgge from "../../font/images/imgge.jpeg";
import "./Livres.scss";


export default class Livres extends Component 
 {
  
  render(){
    var element = document.getElementById("slide_container");
    var pos = 0 ;
    function myMove() {
      let id = setInterval(frame,5);
      function frame() {
        if (pos === 28) {
          clearInterval(id);
        }else{
          pos++;
          element.style.left=pos+"px"
        }
      }
    }


    return(
      <>      <div className="recherche">
      <form>
        <input type="text" placeholder="Search"/>
        <button> <i class="material-icons">search</i></button>
        </form>
      </div>

      <div className="Body2_1 howa">
         
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}  
      <div className="slide_container">
        <div className="slide_content">
          <div className="card_wraper">
            <div className="slide_card">
              <div className="image_content">
                <span className="overlay"></span>
                <div className="card_image">
                  <img src={IMG1} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Bande Dessinee</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                </p>
                <div className="btnss">
                  
                <button className="btn_cadre">
                <span class="material-symbols-outlined" onClick={myMove()}>
                  add_circle
                </span>
                </button>
                <button className="btn_cadre" >
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* ------------------------ */}
      <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">Á L'AFFICHE</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
       {/* ------------------------ */}
       <div className="slide_container ">
        <div className="slide_content">
          <div className="card_wraper ">
            <div className="slide_card  ">
              <div className="image_content">
                <span className="overlay"></span>

                <div className="card_image">
                  <img src={imgge2} alt="aa" className="card_img" />
                </div>
              </div>
              <div className="card_content">
                <h2 className="name">RAIN</h2>
                <h5 className="name">400$</h5>
                <p className="discription">
                  
                </p>
                <div className="btnss">
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  add_circle
                </span>
                </button>
                <button className="btn_cadre">
                <span class="material-symbols-outlined">
                  info
                </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
      {/* ------------------ */}
    </div>
    </>

    );
  }
 }