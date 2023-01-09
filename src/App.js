 
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Club from './components/club/Body/JS/Club';
import Connexion from './components/connexion/Body/JS/Connexion';
import Body from './components/HOME/Body/JS/Body';
import Header from './components/HOME/header/JS/Header';
 
import PageHome from './components/HOME/Page/PageHome';
import Inscription from './components/inscription/Body/JS/Inscription';
import Reservation from './components/Reservation/JS/Reservation';
import './Style/App.scss';

 class App extends Component {
 render(){


  return (
      <div>
          <Routes>
            <Route path='/' element={<PageHome/>}>
             <Route  index element={<Body/>}/> 
             <Route  path='/reservation' element={<Reservation/>}/> 
             <Route  path='/Inscription' element={<Inscription/>}/>
             <Route  path='/Club' element={<Club/>}/>  
            </Route>
         </Routes>
         
      </div>
  );
} 
}
 
 
export default  App;

 
