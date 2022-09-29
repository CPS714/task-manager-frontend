
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
  
// import Login component
import Login from "./Login/Login";
// import SignIn component
import SignIn from "./Login/SignIn";

// import ContactUs component
import MainPage from './mainPage/MainPage';



function App() {
  const [loginOpt, setLoginOpt] = useState(false);
  const [userData, setUserData] = useState({});
  const SwitchOpt = () => {
    setLoginOpt(!loginOpt)
  }
  return (
    <div className="App">
      { /*
      {!loginOpt ? 
      <Login switchOpt={SwitchOpt}/> : 
      <SignIn switchOpt={SwitchOpt}/>
    }
  */}

        <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route exact path="/signin" element={<SignIn />} />

          <Route exact path="/MainPage" element={<MainPage />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
