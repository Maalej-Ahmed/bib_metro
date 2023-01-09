import { render } from "@testing-library/react";
import React, { useState } from "react";
import "../scss/Connexion.scss";  
import { useSelector } from 'react-redux';
 


function Connexion () {
 
 
  const showCon = useSelector(state=>state.showConnexion)
  const [passseword,setpasseword] = useState('')
        return(
        



showCon &&

 

      <div className="connexion">
         <form className="form">

          <h2>CONNEXION</h2>

          <div className="inputBox">
            <input type="text" required="required"/>
            <span>EMAIL</span> 
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" onChange={(e)=>{
               setpasseword(e.target.value)
            }} required="required"/>
            <span>Mot De Passe</span> 
            <i></i>
      
          </div>

          <div className="links">
            <a href="#"> mot de passe oublier ?</a>
            <a href="#" className="inscri"> s'inscrire </a>
          </div>


          <h2>{passseword}</h2>

         <button className="button-33" role="button">CONNEXION</button>
         <div>

         </div>
         </form>
    
     

      




  
        
 
      </div>    
      
 
        );
    
  }
export default  Connexion