import {createStore} from 'redux'


const initState = {
 
    showConnexion: false,
 
}

const changeNameClass = ( state = initState, action)=>{
   
     if (action.type==="showcon") {
        return{
            ...state,
           
            showConnexion: state.showConnexion = !state.showConnexion
        }
     }

   return state
};




 


const store = createStore(changeNameClass);
export default store;