/* eslint-disable react/prop-types */

import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'

import SignIn from './components/login/SignIn'
import Home from './components/home/Home'
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react'

// Encapsulate your components that require auth with this
const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args)
  return <Component />
}

// Lets user's navigate back to where they left off after authenticating
const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate()
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname)
  }
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  )
}

function App () {
  return (
    <div className="App">
        <Router>
          <Auth0ProviderWithRedirectCallback
          domain='dev-musip85d.us.auth0.com'
          clientId='A38rLwbbBcetjaBQR9lsey888fmQwfny'
          redirectUri={window.location.origin}
          >
            <Routes>
              {/* <Route exact path="/" element={<Login />} /> */}

              <Route exact path="/signin" element={<SignIn />} />

              <Route path="/home" element={<ProtectedRoute component={Home} />} />
            </Routes>
          </Auth0ProviderWithRedirectCallback>
        </Router>
    </div>
  )
}

export default App
