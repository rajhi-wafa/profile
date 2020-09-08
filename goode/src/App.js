import React from 'react';
import Profile from './profile/Profile'
import './App.css';


const  handleName =(fullName)=>{
  alert (`my name is ${fullName}`);
};

function App(props) {
  return (
    <div className="App" >

      <Profile 
       fullName ="Maria Pilla" 
       bio="ana to ana"
       profession="Student" 
       handleName={ handleName}>
            <img className="image-container" src="th.jpg" alt="bov"/>
            </Profile>

     </div>
  );
}

export default App;
