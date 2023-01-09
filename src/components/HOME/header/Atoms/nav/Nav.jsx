 
import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Reservation from '../../../../Reservation/JS/Reservation';
import Body from '../../../Body/JS/Body';
import PageHome from '../../../Page/PageHome';
 
 
import "./Nav.scss"

 
function Nav () {
   
    
 
 
        const Dispatch = useDispatch()
        const state = useSelector(state => state.showConnexion);

        console.log(state)
        console.log("1")
       
       
       const showcon=()=>{
        Dispatch({type:"showcon"})
       }
         
    
        
      
           
        return(
          <div className="navs">
          
                      <ul>
                        <li>
                            <a href='/'>HOME</a>
                        </li>
                        <li>
                            <a onClick={showcon}>connexion</a>
                        </li>
                        <li>
                            <a href='/reservation'>Réservations</a>
                        </li>
                        <li>
                            <a href='Club'>club</a>
                        </li>
                        <li>
                            <a>Biographies des auteurs</a>
                        </li>
                      </ul>
              
            
          </div> 
 
        );
 
 
        }
 
 
export default  Nav;