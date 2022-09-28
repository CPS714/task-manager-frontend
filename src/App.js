
import React, { useState } from 'react';
import SignIn from './Login/SignIn';
import MainPage from './mainPage/MainPage';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login'
function App() {
  const [loginOpt, setLoginOpt] = useState(false);
  const [userData, setUserData] = useState({});
  const SwitchOpt = () => {
    setLoginOpt(!loginOpt)
  }
  return (
    <div className="App">
      {!loginOpt ? 
      <Login switchOpt={SwitchOpt}/> : 
      <SignIn switchOpt={SwitchOpt}/>
    }
    </div>
  );
}

export default App;
