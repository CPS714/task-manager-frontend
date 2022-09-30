
import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './components/login/Login'
import SignIn from './components/login/SignIn'
import MainPage from './components/mainPage/MainPage'

function App () {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />

            <Route exact path="/signin" element={<SignIn />} />

            <Route exact path="/MainPage" element={<MainPage />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
